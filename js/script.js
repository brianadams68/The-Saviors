window.addEventListener('load', () => {

    const startButton = document.getElementById
        ("start-button")
    const restartButton = document.getElementById
        ("restart-button")
    const newGameButton = document.getElementById
        ("new-game-button")

    let game

    function startGame() {
        console.log("start game");
        game = new Game()
        game.start()
        document.addEventListener('keydown', event => {
            const key = event.key;
            const possibleKeyStrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];

            if (possibleKeyStrokes.includes(key)) {
                event.preventDefault();

                
                switch (key) {
                    case "ArrowLeft":
                        game.ship.directionX = -5;
                        break
                    case "ArrowUp":
                        game.ship.directionY = -4;
                        break
                    case "ArrowRight":
                        game.ship.directionX = 4;
                        break
                    case "ArrowDown":
                        game.ship.directionY = 4;
                        break
                    case ' ':
                            game.ship.canShoot = true;
                            game.ship.shoot();
                            break;
                }

                console.log(game.ship.directionX, game.ship.directionY, game.ship.canShoot)
            }
        })

        document.addEventListener('keyup', event => {

            const key = event.key;
            const possibleKeystrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();

                
                switch (key) {
                    case "ArrowLeft":
                    case "ArrowRight":
                        game.ship.directionX = 0;
                        break
                    case "ArrowUp":
                    case "ArrowDown":
                        game.ship.directionY = 0;
                        break
                }
            }
        })
    }

    startButton.addEventListener('click', function () {
        startGame();
        let mySound = new Audio("../audio/battle.mp3");
            mySound.loop = true;
            mySound.volume = 0.5;

            mySound.addEventListener("timeupdate", function () {
                if (mySound.currentTime >= mySound.duration - 0.5) {
                    mySound.currentTime = 0;
                }
            });
        
            mySound.play();
        });

    restartButton.addEventListener('click', () => {
        location.reload()
    });

    newGameButton.addEventListener('click', () => {
        location.reload()
    });
});
