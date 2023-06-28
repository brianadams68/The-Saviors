# Project Modulo 1| The Saviors

## Description

- This game is based on the competitive side (for fun) and to save the world from bad comics. 

The saviors went into space to try to stop the bad comics from reaching the earth and invading it to enslave all the people in the world by making them become just another DC.

## Functionalities

- Ship move with the arrows key left, right, down and up.

- Ship use the space key to shoot.

- The game ends when you kill 10 DC shields or if you collide with three of them making you lose the game .

- The score is calculated based on the amount of shields destroyed.

## Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Local Storage
- JS Audio() and JS Image()

## States

- Start Screen
- Game Screen
- Game Winner Screen
- Game Over Screen

## Project Structure

- Scrip.js
    * const startButton;
    * const restartButton;
    * const newGameButton;
    * let game;

- Game.js

  - Game()
    * this.startScreen;
    * this.gameScreen;
    * this.gameOver;
    * this.youWin;
    * this.ship;
    * this.height;
    * this.width;
    * this.obstacle;
    * this.isGameOver;
    * this.youDidWin;
    * this.score;
    * this.lives;
  - start()
  - gameLoop()
  - update()
  - endGame()
  - youWon()

- Ship.js

  - Ship()
    * this.gameScreen;
    * this.with;
    * this.height;
    * this.top;
    * this.left;
    * this.directionX;
    * this.directionY;
    * this.bullets;
    * this.bulletSpeed;
    * this.canShoot;
    * this.element;
  - move()
    * this.updatePosition;
  - updatePosition()
  - shoot()
  - updateBullets()
  - didCollide()

- Obstacles.js

  - Obstacle()
    * this.gameScreen;
    * this.right;
    * this.top;
    * this.width; 
    * this.height;
    * this.element;
  - move()
  - updatePosition() 

- Bullet.js

  - Bullet()
    * this.gameScreen;
    * this.width;
    * this.height;
    * this.left;
    * this.top;
    * this.speed;
    * this.element;
  - move()
  - updatePosition()
  - didCollide()