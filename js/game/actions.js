/* ************************** */
/*                            */
/*         action.js          */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

// actions.js contains all the code for animations and event handlers

// creating an animation loop to keep drawing and updating the game's animations
function animationLoop() {
  // clearing the player's canvas
  context1.clearRect(0, 0, c1.width, c1.height);

  // drawing the player
  player.draw();

  // updating the player's sprite animation
  player.update();

  // drawing the vehicles on the canvas
  handleVehicles();

  // showing the player's score and remaining lives
  viewScore();

  // using a built-in function to call the parent function again to create a loop (this is known as recursion)
  requestAnimationFrame(animationLoop);
}

// starting the animation loop
animationLoop();

// event handlers
// event listener to listen for key press
window.addEventListener("keydown", function (event) {
  // noting down the keys pressed by the user in the moves array
  moves = [];

  // adding the pressed key codes to the moves array
  moves[event.keyCode] = true;
});

// event listener to listen for key release, this resets the player's movement to false allowing the player to move again
window.addEventListener("keyup", function (event) {
  // deleting the already executed moves from the array
  delete moves[event.keyCode];

  // setting the player movement to false
  player.movement = false;
});

// function to maintain player's score
function scored(position) {
  if (position === "up") {
    score++;
  } else if (position === "down") {
    score--;
  }
}

// function to move user to next level and increase the game speed accordingly
function nextLevel() {
  nextLevelAudio.play();
  // resetting the player's coordinates back to its start postion
  player.x = c1.width / 2 - player.width / 2;
  player.y = c1.height - player.height - 5;

  // increasing level and game speed
  level++;
  gameSpeed += 0.3;

  // pausing the game to avoid accidental moves leading the player to lose lives
  sleep(2000);
}

// function to let the user know their score and remaining lives
function viewScore() {
  // the lives will be shown as hearts (icons), therefore they have been put in the <i> tags and captured here
  let showLives = document.getElementById("lives");

  // writing the score on the canvas
  context1.fillStyle = "white";
  context1.strokeStyle = "white";
  context1.font = "30px Calibri";
  context1.fillText("Score: ", 870, 40);
  context1.fillText(score, 950, 40);

  // updating the hearts based on how many lives remain
  if (lives === 3) {
    showLives.innerHTML =
      '<i class="fas fa-heart"></i> <i class="fas fa-heart"></i> <i class="fas fa-heart"></i>';
  } else if (lives === 2) {
    showLives.innerHTML =
      '<i class="fas fa-heart"></i> <i class="fas fa-heart"></i>';
  } else if (lives === 1) {
    showLives.innerHTML = '<i class="fas fa-heart"></i>';
  }
}

// function to detect collision between the payer and the vehicles
function detectCollision(playerObj, vehicleObj) {
  // all the possible conditions of a collision are checked below
  return !(
    playerObj.x > vehicleObj.x + vehicleObj.width ||
    vehicleObj.x > playerObj.x + playerObj.width ||
    playerObj.y > vehicleObj.y + vehicleObj.height ||
    vehicleObj.y > playerObj.y + playerObj.height
  );
}

// function to reset the player position and other global variables after crash or game over
function reset(status) {
  if (status === "continue") {
    crashAudio.play();
    // resetting the player's coordinates back to its start postion
    player.x = c1.width / 2 - player.width / 2;
    player.y = c1.height - player.height - 5;
    player.frameY = 0;
  } else {
    gameOverAudio.play();
    // recording the logged in user's score if they beat their own record
    if (loggedInUsername != undefined) {
      let curPlayer = JSON.parse(localStorage.getItem(loggedInUsername));
      if (curPlayer.maxscore < score) {
        curPlayer["maxscore"] = score;
        localStorage.setItem(curPlayer.username, JSON.stringify(curPlayer));
      }
    }
    // resetting the player's coordinates back to its start postion
    player.x = c1.width / 2 - player.width / 2;
    player.y = c1.height - player.height - 5;
    player.frameY = 0;
    lives = 3;
    score = 0;
    gameSpeed = 1;
    level = 1;

    sleep(2000);
  }
}

// sleep function to pause the game at some points
function sleep(ms) {
  const curTime1 = Date.now();
  let curTime2 = null;
  do {
    curTime2 = Date.now();
  } while (curTime2 - curTime1 < ms);
}
