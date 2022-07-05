const GAME_SPEED_ELEMENT = document.getElementsByClassName('game-speed');
const CANVAS_CONTAINER = document.getElementsByClassName('canvas-container');

const MAX_CANVAS_WIDTH = 1000;
const MAX_CANVAS_HEIGHT = 500;
const CELL_COLOR = '#00FF41';

var ROW_SIZE = 50;
var COLUMN_SIZE = 25;
var CELL_SIZE = 20;
var GAME_START_RANDOM = false;

let cells = new Array(ROW_SIZE);
let director = new Director();

function setup() {
  var myCanvas = createCanvas(ROW_SIZE*CELL_SIZE, COLUMN_SIZE*CELL_SIZE);
  myCanvas.parent('p5-canvas');
  for (let j = 0; j < ROW_SIZE; j++) {
    cells[j] = new Array(COLUMN_SIZE).fill(false);
  }

}

function draw() {
  
  //Clear the canvas
  clear();

  //Remove the stroke, and add matrix color
  noStroke();
  fill(CELL_COLOR);

  //Draw the cells that are available in the cells array, leave blank otherwise
  cells.forEach(row => {
    row.forEach(cell => {
      if (cell !== false) {
        cell.draw();
      }
    })
  });
}

function mousePressed() {
  //If user clicks at a position, add a cell
  if (mouseX > 0 && mouseY > 0 && mouseX < MAX_CANVAS_WIDTH && mouseY < MAX_CANVAS_HEIGHT) {
    director.createAtPos(mouseX, mouseY, CELL_SIZE, CELL_SIZE);
  }
}

function updateTGOL() {
  GAME_SPEED = parseFloat(GAME_SPEED_ELEMENT[0].value);
}

function startTGOL() {
  updateTGOL();
  if (!director.running) {
    director.start();
    runTGOL();
  }
}

function runTGOL() {
  director.run();
  if (director.running) {
    setTimeout(() => runTGOL(), GAME_SPEED*1000);
  }
}