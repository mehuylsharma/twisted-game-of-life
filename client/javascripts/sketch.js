const ROW_ELEMENT = document.getElementsByClassName('block-rows');
const COLUMN_ELEMENT = document.getElementsByClassName('block-columns');
const GAME_SPEED_ELEMENT = document.getElementsByClassName('game-speed');
const CANVAS_CONTAINER = document.getElementsByClassName('canvas-container');

const MAX_CANVAS_WIDTH = 1000;
const MAX_CANVAS_HEIGHT = 500;
const CELL_COLOR = '#00FF41';

var ROW_SIZE = 40;
var COLUMN_SIZE = 20;
var CELL_SIZE = 25;

let cells = new Array(ROW_SIZE);
let director = new Director();

function setup() {
  var myCanvas = createCanvas(ROW_SIZE*CELL_SIZE, COLUMN_SIZE*CELL_SIZE);
  myCanvas.parent('p5-canvas');
  for (let j = 0; j < ROW_SIZE; j++) {
    cells[j] = new Array(COLUMN_SIZE).fill(false);
  }

  for (let i = 0; i < ROW_SIZE; i++) {
    for (let j = 0; j < COLUMN_SIZE; j++) {
      if (Math.random() < 0.5) {
        director.create(i, j);
      }
    }
  }
}

function draw() {
  clear();
  noStroke();
  fill(CELL_COLOR);
  cells.forEach(row => {
    row.forEach(cell => {
      if (cell !== false) {
        cell.draw();
      }
    })
  })
}

function updateTGOL() {
  ROW_SIZE = parseInt(ROW_ELEMENT[0].value);
  COLUMN_SIZE = parseInt(COLUMN_ELEMENT[0].value);
  GAME_SPEED = parseFloat(GAME_SPEED_ELEMENT[0].value);

  if (ROW_SIZE > COLUMN_SIZE ) {
    CELL_SIZE = MAX_CANVAS_HEIGHT/ROW_SIZE;
  } else {
    CELL_SIZE = MAX_CANVAS_WIDTH/COLUMN_SIZE;
  }

  CANVAS_CONTAINER[0].style['background-size'] = `${CELL_SIZE}px ${CELL_SIZE}px`;
  
  cells = new Array(ROW_SIZE);

  for (let j = 0; j < ROW_SIZE; j++) {
    cells[j] = new Array(COLUMN_SIZE).fill(false);
  }

  for (let i = 0; i < ROW_SIZE; i++) {
    for (let j = 0; j < COLUMN_SIZE; j++) {
      if (Math.random() < 0.5) {
        director.create(i, j);
      }
    }
  }

  resizeCanvas(ROW_SIZE*CELL_SIZE, COLUMN_SIZE*CELL_SIZE);
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