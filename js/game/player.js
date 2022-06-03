/* ************************** */
/*                            */
/*         player.js          */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// player.js creates the Player class
class Player {
  constructor() {
    // extracting each player frame from the player spritesheet
    this.playerHeight = 75;
    this.playerWidth = 75;

    // reducing the size of the player frame to fit in the grid
    this.height = this.playerHeight - 20;
    this.width = this.playerWidth - 20;

    // setting the starting coordinates of the player
    this.x = c1.width / 2 - this.width / 2;
    this.y = c1.height - this.height - 5;

    // prevents the player from continously moving when a key is pressed down
    this.movement = false;

    // coordinates to change the player's animation from the spritesheet
    // these values will be updated to show the relevant animation when the player moves
    this.frameX = 0;
    this.frameY = 0;
  }

  // update method to update the player's movement and sprites accordingly
  update() {
    // if left arrow is pressed
    if (moves[37]) {
      // if the player is not moving
      if (this.movement === false) {
        // if the player is within the width of the canvas
        if (this.x > this.width) {
          // moving the player left by reducing the player's x-axis value
          this.x -= grid;

          // setting player's movement to true because the player moved
          this.movement = true;

          // changing the Y coordinate to display a different sprite
          this.frameY = 1;
        }
      }
    }

    // if up arrow is pressed
    if (moves[38]) {
      // if the player is not moving
      if (this.movement === false) {
        // moving the player up by reducing the player's y-axis value
        this.y -= grid;

        // setting player's movement to true because the player moved
        this.movement = true;

        // changing the Y coordinate to display a different sprite
        this.frameY = 0;

        // scored() function (with argument of "up") to increase the score of player for every progressive move
        scored("up");
      }
    }

    // if right arrow is pressed
    if (moves[39]) {
      // if the player is not moving
      if (this.movement === false) {
        // if the player is within the width of the canvas
        if (this.x < c1.width - this.width * 2) {
          // moving the player right by increasing the player's x-axis value
          this.x += grid;

          // setting player's movement to true because the player moved
          this.movement = true;

          // changing the Y coordinate to display a different sprite
          this.frameY = 3;
        }
      }
    }

    // if down arrow is pressed
    if (moves[40]) {
      // if the player is not moving
      if (this.movement === false) {
        // if the player's Y-coordinate is above the bottom of the canvas
        if (this.y < c1.height - this.height * 2) {
          // moving the player down by increasing the player's y-axis value
          this.y += grid;

          // setting player's movement to true because the player moved
          this.movement = true;

          // changing the Y coordinate to display a different sprite
          this.frameY = 2;

          // scored() function (with argument of "down") to decrease the score of player for every regressive move
          scored("down");
        }
      }
    }

    // if player crosses all roads successfully and reaches the last patch of grass, he moves to the next level
    if (this.y < 0) {
      nextLevel();
    }
  }

  // draw method to draw the player's sprites on the canvas
  draw() {
    context1.drawImage(
      playerSprite,
      this.frameX * this.playerWidth,
      this.frameY * this.playerHeight,
      this.playerWidth,
      this.playerHeight,
      this.x - 7,
      this.y - 11,
      this.width * 1.3,
      this.height * 1.3
    );
  }
}

// creating the player object
const player = new Player();
