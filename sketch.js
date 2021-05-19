var database;
var form, player, game;
var gameState = 0;
var playerCount = 0;
var bg;
var allPlayers
function preload() {
    bg = loadImage("carracinggame.jpeg")
}
function setup() {
    createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
     background(bg);
     if(playerCount===4) {
         game.update(1)
     }
     if(gameState===1) {
         clear()
         game.play()
     }
}