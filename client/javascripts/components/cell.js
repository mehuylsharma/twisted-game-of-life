class Cell {
  constructor(x, y, len) {
    this.x = x;
    this.y = y;
    this.len = len;
  }

  draw() {
    rect(this.x * this.len, this.y * this.len, this.len, this.len);
  }
}