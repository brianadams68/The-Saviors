window.addEventListener('load', () => {

    const startButton = document.getElementById
        ("start-button")
    const restartButton = document.getElementById
        ("restart-button")

    let game

    function startGame() {
        console.log("start game");
        game = new Game()
        game.start()
        document.addEventListener('keydown', event => {
            const key = event.key;
            const possibleKeyStrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Space"];

            if (possibleKeyStrokes.includes(key)) {
                event.preventDefault();

                // Update ship directionX and directionY based on the key pressed
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
                    case "Space":
                        game.ship.canShoot();
                        break;
                }

                console.log(game.ship.directionX, game.ship.directionY)
            }
        })

        document.addEventListener('keyup', event => {

            const key = event.key;
            const possibleKeystrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();

                // Update ship directionX and directionY based on the key pressed
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
    });

    restartButton.addEventListener('click', () => {
        location.reload()
    });
});
