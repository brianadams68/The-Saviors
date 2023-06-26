class Ship {

    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.with = 80
        this.height = 110
        this.top = 500
        this.left = 300
        this.bullets = [];
        this.bulletSpeed = 5;
        this.canShoot = true;
        this.directionX = 0
        this.directionY = 0
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
        if (this.left < 50) {
            this.left = 50
        }
        if (this.top < 100) {
            this.top = 100
        }
        // handles right hand side
        if (this.left > this.gameScreen.offsetWidth - this.with - 180) {
            this.left = this.gameScreen.offsetWidth - this.with - 180
        }
        // handles bottom side
        if (this.top > this.gameScreen.offsetHeight - this.height - 380) {
            this.top = this.gameScreen.offsetHeight - this.height - 380;
        }

        this.updatePosition();
    }
    
    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
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

    //Bullets

    // Evento de escucha para el disparo
    shoot() {
        // Crear una nueva bala y agregarla al arreglo de balas
        const bullet = new Bullet(this.gameScreen, this.left, this.top);
        this.bullets.push(bullet);
    
        // Establecer un temporizador para controlar la frecuencia de disparo
        this.canShoot = false;
        setTimeout(() => {
          this.canShoot = true;
        }, 300); // Puedes ajustar el valor de tiempo según tus necesidades
      }

      moveBullets() {
        // Mover todas las balas en el arreglo
        this.bullets.forEach((bullet) => {
          bullet.move();
    
          // Si la bala está fuera de la pantalla, eliminarla del arreglo
          if (bullet.left > this.gameScreen.offsetWidth) {
            bullet.element.remove();
            this.bullets.splice(this.bullets.indexOf(bullet), 1);
          }
        });
      }
}