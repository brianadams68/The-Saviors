class Obstacle {

    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.right = Math.floor(Math.random() * 90 + 8)
        this.top = Math.floor(Math.random() * 900 + 100)
        this.width = 90
        this.height = 90
        this.element = document.createElement('img')

        const imageSources = ['./images/dc-logo.png', './images/superman.png', './images/batman.png', './images/flash.png', './images/aquaman.png'];
        const randomIndex = Math.floor(Math.random() * imageSources.length);
        const imageSrc = imageSources[randomIndex];


        this.element.src = imageSrc;
        this.element.style.position = 'absolute'


        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        this.element.style.top = `${this.top}px`
        this.element.style.right = `${this.right}px`

        this.gameScreen.appendChild(this.element)
    }

    move() {
        this.right += 4

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.top = `${this.top}px`
        this.element.style.right = `${this.right}px`
    }
}