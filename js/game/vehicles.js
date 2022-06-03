/* ************************** */
/*                            */
/*       vehicles.js          */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// vehicles.js creates the Vehicle class
class Vehicle {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.randCar = Math.floor(Math.random() * 6) + 1;
  }

  // draw method to draw the vehicle sprites on the canvas
  draw() {
    // creating an image object and randomly assigning car images to it
    let car = new Image();

    // conditions to change vehicle image directions based on which road lane they are generated on
    // first lane going right
    if (this.y == c1.height - grid * 1.92) {
      car.src = "images/game/" + this.randCar + "right.png";
      context1.drawImage(car, this.x, this.y, this.width, this.height);
    }
    // second lane going left
    if (this.y == c1.height - grid * 3.92) {
      car.src = "images/game/" + this.randCar + "left.png";
      context1.drawImage(car, this.x, this.y, this.width, this.height);
    }
    // third lane going right
    if (this.y == c1.height - grid * 5.92) {
      car.src = "images/game/" + this.randCar + "right.png";
      context1.drawImage(car, this.x, this.y, this.width, this.height);
    }
  }

  // update method to update the vehicles' movement and sprites accordingly
  update() {
    /* the gameSpeed is not 'added' to the speed of the vehicles because the vehicles will be travelling in
     * both directions (left and right), this means that some vehicles will have a negative value for speed moving
     * them left and some will have positive moving them right,
     * therefore I simply multiply their speeds to just speed them up in their respective directions on the x-axis */
    this.x += this.speed * gameSpeed;

    // to create animation loop for the vehicles we first check if their speed is positive or negative (moving left to right or right to left)
    if (this.speed > 0) {
      // if vehicle is moving left to right, then check if it crossed the right border of canvas completely
      if (this.x > c1.width + this.width) {
        // reset the x-position of the vehicle to the left border of the canvas
        this.x = 0 - this.width;
        // changing the vehicle image after it crosses the canvas border
        this.randCar = Math.floor(Math.random() * 6) + 1;
      }
    } else {
      // if vehicle is moving right to left, then check if it crossed the left border of canvas completely
      if (this.x < 0 - this.width) {
        // reset the x-position of the vehicle to the right border of the canvas
        this.x = c1.width + this.width;
        // changing the vehicle image after it crosses the canvas border
        this.randCar = Math.floor(Math.random() * 6) + 1;
      }
    }
  }
}

// function to initialise the vehicles objects and push them into the vehicles array
function initVehicles() {
  // creating 3 vehicles on road 1
  for (let i = 0; i < 3; i++) {
    // adding distance between the vehicles
    let distance = i * 350;

    // pushing the created vehicle objects into the arrVehicles array
    arrVehicles.push(
      new Vehicle(distance, c1.height - grid * 1.92, grid * 2, grid - 10, 1)
    );
  }

  // creating 4 vehicles on road 2
  for (let i = 0; i < 4; i++) {
    // adding distance between the vehicles
    let distance = i * 300;

    // pushing the created vehicle objects into the arrVehicles array
    arrVehicles.push(
      new Vehicle(distance, c1.height - grid * 3.92, grid * 2, grid - 10, -2)
    );
  }

  // creating 4 vehicles on road 3
  for (let i = 0; i < 4; i++) {
    // adding distance between the vehicles
    let distance = i * 300;

    // pushing the created vehicle objects into the arrVehicles array
    arrVehicles.push(
      new Vehicle(distance, c1.height - grid * 5.92, grid * 2, grid - 10, 2)
    );
  }
}

// initialising the vehicles
initVehicles();

// function to draw and update the initialised vehicle objects onto the canvas
function handleVehicles() {
  for (let i = 0; i < arrVehicles.length; i++) {
    arrVehicles[i].update();
    arrVehicles[i].draw();
  }

  // looping through the vehicles array to check for collisions with the player
  for (let i = 0; i < arrVehicles.length; i++) {
    if (detectCollision(player, arrVehicles[i])) {
      if (lives > 1) {
        lives--;
        reset("continue");
      } else {
        reset("end");
      }
    }
  }
}
