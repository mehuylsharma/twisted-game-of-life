var GAME_SPEED = 0.1;

class Director {
  constructor() {
    this.running = false;
    this.prevCells = [];
  }

  start() {
    this.running = true;
  }

  stop() {
    this.running = false;
  }

  createAtPos(mX, mY, cWidth, cHeight) {
    var originX = Math.floor(mX / cWidth);
    var originY = Math.floor(mY / cHeight);
    this.create(originX, originY);
  }

  run() {
    if (this.running) {
      if (!cells) return

      for (let i = 0; i < ROW_SIZE; i++) {
        for (let j = 0; j < COLUMN_SIZE; j++) {
          
          //Count neighbors
          let neighbor_count = 0;
          if (this.exists(i-1,j)) { neighbor_count += 1; }
          if (this.exists(i+1,j)) { neighbor_count += 1; }
          if (this.exists(i,j-1)) { neighbor_count += 1; }
          if (this.exists(i,j+1)) { neighbor_count += 1; }
          if (this.exists(i-1,j-1)) { neighbor_count += 1; }
          if (this.exists(i-1,j+1)) { neighbor_count += 1; }
          if (this.exists(i+1,j-1)) { neighbor_count += 1; }
          if (this.exists(i+1,j+1)) { neighbor_count += 1; }
          
          //Rule #1: Each dead cell adjacent to exactly three live neighbors will become live in the next generation
          
          if (neighbor_count == 3 && ( this.exists(i, j) == false )) {
            this.create(i, j);
          } else
  
          //Rule #2: Each live cell with one or fewer live neighbors will die in the next generation
          //Rule #3: Each live cell with four or more live neighbors will die in the next generation
  
          if ( neighbor_count <= 1 || neighbor_count >= 4 && ( this.exists(i, j) )) {
            this.delete(i, j);
          }
  
          //Rule #4: Each live cell with either two or three live neighbors will remain alive for the next generation. 
        }
      }
    }
  }

  exists(x, y) {
    if (x == -1 || y == -1 || x == ROW_SIZE || y == COLUMN_SIZE) {
      return false;
    } else 
    return cells[x][y] == false ? false : true;
  }

  create(x, y) {
    cells[x][y] = new Cell(x, y, CELL_SIZE);
  }

  delete(x, y) {
    cells[x][y] = false;
  }
}