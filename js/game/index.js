/* ************************** */
/*                            */
/*         index.js           */
/*                            */
/*   By: ABDUL HASEEB KHAN    */
/*         M00792907          */
/*                            */
/* ************************** */

/* index.js sets up the entire game scene by setting up the different canvas elements.
 * It also includes variables and references that will be used in other js files. */

// global variables
// dividing the game frame in grid cells of 68x68 px
const grid = 68;

// empty array to store vehicles
const arrVehicles = [];

// audio files for different actions
let crashAudio = new Audio("js/game/audio/crash_audio.mp3");
let nextLevelAudio = new Audio("js/game/audio/next_level_audio.mp3");
let gameOverAudio = new Audio("js/game/audio/game_over_audio.mp3");

// setting default score of player to 0
let score = 0;

// array to store the moves played by the user
let moves = [];

// variable to track player's lives, by default it is 3
let lives = 3;

// variable to track the player's progress in terms of levels
let level = 1;

// variable to increase the game's speed as the level increases
let gameSpeed = 1;

// canvas
const c1 = document.getElementById("canvas1");
const context1 = c1.getContext("2d");
c1.height = 475;
c1.width = 1000;

// player spritesheet
const playerSprite = new Image();
playerSprite.src = "images/game/player_spritesheet.png";
