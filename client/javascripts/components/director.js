const CELL_SIZE = 25;
const GAME_SPEED = 0.5;

class Director {
  constructor() {
    //What it will take?
  }

  run() {
    for (let i = 0; i < ROW_SIZE; i++) {
      for (let j = 0; j < COLUMN_SIZE; j++) {
        //Rule #1: Each dead cell adjacent to exactly three live neighbors will become live in the next generation
        let neighbor_count = 0;
        if (this.exists(i-1,j)) { neighbor_count += 1; }
        if (this.exists(i+1,j)) { neighbor_count += 1; }
        if (this.exists(i,j-1)) { neighbor_count += 1; }
        if (this.exists(i,j+1)) { neighbor_count += 1; }
        if (this.exists(i-1,j-1)) { neighbor_count += 1; }
        if (this.exists(i-1,j+1)) { neighbor_count += 1; }
        if (this.exists(i+1,j-1)) { neighbor_count += 1; }
        if (this.exists(i+1,j+1)) { neighbor_count += 1; }

        if (neighbor_count == 3 && ( this.exists(i, j) == false )) {
          this.create(i, j);
        }

        //Rule #2: Each live cell with one or fewer live neighbors will die in the next generation

        if (neighbor_count <= 1) {
          this.delete(i, j);
        }

        //Rule #3: Each live cell with four or more live neighbors will die in the next generation

        if (neighbor_count >= 4) {
          this.delete(i, j);
        }

        //Rule #4: Each live cell with either two or three live neighbors will remain alive for the next generation. 

        //Do nothing.
      }
    }

    setTimeout(() => this.run(), GAME_SPEED*1000);
  }

  exists(x, y) {
    if (x == -1 || y == -1 || x == ROW_SIZE || y == COLUMN_SIZE) {
      return false;
    } else return cells[x][y] == false ? false : true;
  }

  create(x, y) {
    cells[x][y] = new Cell(x, y, CELL_SIZE);
  }

  delete(x, y) {
    cells[x][y] = false;
  }
}