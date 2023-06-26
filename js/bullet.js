class Bullet {

    constructor(gameScreen, shipLeft, shipTop) {
        this.gameScreen = gameScreen
        this.width = 5
        this.height = 10
        this.element = document.createElement('img')

        this.element.src = './images/bullet.png'
        this.element.style.position = 'absolute'

        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        // Ajustar la posición inicial de la bala con respecto a la nave
        this.left = shipLeft + 80; // Ajusta el valor según la posición de la nave
        this.top = shipTop + 40; // Ajusta el valor según la posición de la nave

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element)
    }

    move() {
        this.right += 3

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }
}