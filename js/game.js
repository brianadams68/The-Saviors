class Game {
    constructor() {

        this.startScreen = document.getElementById('game-start')
        this.gameScreen = document.getElementById('game-screen')
        this.gameOver = document.getElementById('game-over')
        this.youWin = document.getElementById('you-win')

        this.ship = null;
        this.height = 100
        this.width = 100
        this.ship = new Ship(this.gameScreen)
        this.obstacle = [new Obstacle(this.gameScreen)]
        this.isGameOver = false
        this.youDidWin = false
        this.score = 0
        this.lives = 3
    }

    start() {
        this.gameScreen.style.width = `${this.width}vw`
        this.gameScreen.style.height = `${this.height}vh`

        this.startScreen.style.display = 'none'
        this.gameScreen.style.display = 'block'

        this.gameLoop()
    }

    gameLoop() {
        this.update();
    
        if (Math.random() > 0.98 && this.obstacle.length < 30) {
            this.obstacle.push(new Obstacle(this.gameScreen));
        }
    
        if (this.isGameOver) {
            this.endGame();
        }
        if (this.youDidWin) {
            this.youWon();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    

    update() {
        this.ship.move()
        const obstacleToKeep = []

        this.obstacle.forEach(obstacle => {
            obstacle.move()

            if (this.ship.didCollide(obstacle)) {
                obstacle.element.remove();
                this.lives -= 1
                document.getElementById('lives').textContent = this.lives; 
            } else if (obstacle.left > this.gameScreen.offsetHeight) {
                this.score += 1
                document.getElementById('score').textContent = this.score; 
            } else {
                obstacleToKeep.push(obstacle)
            }
        })


        this.ship.bullets.forEach(bullets => {
            bullets.move()

            obstacleToKeep.forEach(obstacle => {
                if (bullets.didCollide(obstacle)) {
                    obstacle.element.remove();
                    bullets.element.remove();
                    this.score += 1;
                    document.getElementById('score').textContent = this.score; 
                }
            });
        });

        this.obstacle = obstacleToKeep;

        if (this.lives <= 0) {
            this.isGameOver = true
        }

        if(this.score === 10) {
            this.youDidWin = true
        }
    }

    endGame() {
        this.ship.element.remove()
        this.obstacle.forEach(obstacle => obstacle.element.remove())

        this.gameOver.style.width = `${this.width}vw`
        this.gameOver.style.height = `${this.height}vh`
    
        // Hide game screen
        this.gameScreen.style.display = 'none'
        // Show end game screen
        this.gameOver.style.display = 'block'
      }

    youWon() {
        this.ship.element.remove()
        this.obstacle.forEach(obstacle => obstacle.element.remove())

        this.youWin.style.width = `${this.width}vw`
        this.youWin.style.height = `${this.height}vh`
    
        // Hide game screen
        this.gameScreen.style.display = 'none'
        // Show winner screen
        this.youWin.style.display = 'block'
      }
}