class Ship {

    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.with = 80
        this.height = 110
        this.top = 500
        this.left = 300
        this.directionX = 0
        this.directionY = 0
        this.bullets = [];
        this.bulletSpeed = 5;
        this.canShoot = true
        this.element = document.createElement('img')

        this.element.src = './images/ship1.png'
        this.element.style.position = 'absolute'

        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`

        this.gameScreen.appendChild(this.element)
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        if (this.left < 20) {
            this.left = 20
        }
        if (this.top < 60) {
            this.top = 60
        }
        // handles right hand side
        if (this.left > this.gameScreen.offsetWidth - this.with - 100) {
            this.left = this.gameScreen.offsetWidth - this.with - 100
        }
        // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height - 180) {
            this.top = this.gameScreen.offsetHeight - this.height - 180;
        }

        this.updatePosition();
    }
    
    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
    }

    shoot() {
        const bullet = (new Bullet(this.gameScreen, this.left + 145, this.top + 35));
        this.bullets.push(bullet);
      }
      
      updateBullets() {
        for (let i = this.bullets.length - 1; i >= 0; i--) {
          const bullet = this.bullets[i];
          bullet.move();
          if (bullet.left > this.gameScreen.offsetWidth) {
            bullet.element.remove();
            this.bullets.splice(i, 1);
          } 
        }  
      }
    
    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            return true;
        } else {
            return false;
        }
    }
}