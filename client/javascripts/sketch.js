const ROW_SIZE = 32;
const COLUMN_SIZE = 20;

let cells = new Array(ROW_SIZE);
let director = new Director();

function setup() {
  createCanvas(800, 500);
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
  director.run();
}

function draw() {
  clear();
  noStroke();
  fill(25);
  cells.forEach(row => {
    row.forEach(cell => {
      if (cell !== false) {
        cell.draw();
      }
    })
  })
}
