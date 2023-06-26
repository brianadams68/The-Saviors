class Game {
    constructor() {

        this.startScreen = document.getElementById
            ('game-start')
        this.gameScreen = document.getElementById
            ('game-screen')
        this.gameOver = document.getElementById
            ('game-over')

        this.ship = null;
        this.height = 100
        this.width = 100
        this.ship = new Ship(this.gameScreen)
        this.obstacle = [new Obstacle(this.gameScreen)]
        this.bullet = [new Bullet(this.gameScreen)]
        this.isGameOver = false
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
        this.update()

        if (Math.random() > 0.98 && this.obstacle.length < 25) {
            this.obstacle.push(new Obstacle(this.gameScreen));
        }


        if (this.isGameOver) {
            this.endGame()
        }
        requestAnimationFrame(() => this.gameLoop())
    }

    update() {
        this.ship.move()
        const obstacleToKeep = []

        this.obstacle.forEach(obstacle => {
            obstacle.move()

            if (this.ship.didCollide(obstacle)) {
                obstacle.element.remove();
                this.lives -= 1
                document.getElementById('lives').textContent = this.lives; // Actualizar la interfaz del juego para reflejar la disminución de vidas
            } else if (obstacle.left > this.gameScreen.offsetHeight) {
                this.score += 1
                document.getElementById('score').textContent = this.score; // Actualizar la interfaz del juego para reflejar el aumento de puntaje
            } else {
                obstacleToKeep.push(obstacle)
            }
        })

        this.obstacle = obstacleToKeep;

        if (this.lives <= 0) {
            this.isGameOver = true
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
}