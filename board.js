class Sudoku {
  constructor() {
    this.defaultBoard = [
      [0, 4, 0, 0, 0, 0, 1, 7, 9],
      [0, 0, 2, 0, 0, 8, 0, 5, 4],
      [0, 0, 6, 0, 0, 5, 0, 0, 8],
      [0, 8, 0, 0, 7, 0, 9, 1, 0],
      [0, 5, 0, 0, 9, 0, 0, 3, 0],
      [0, 1, 9, 0, 6, 0, 0, 4, 0],
      [3, 0, 0, 4, 0, 0, 7, 0, 0],
      [5, 7, 0, 1, 0, 0, 2, 0, 0],
      [9, 2, 8, 0, 0, 0, 0, 6, 0],
    ];
  }
  makeBoard() {
    this.board = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (j == 0) {
          this.board.push([]);
        }
        this.board[i][j] = 0;
      }
    }
    return this.board;
  }

  async solve(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] == 0) {
          for (let k = 1; k < 10; k++) {
            if (this.validate(i, j, k, matrix)) {
              matrix[i][j] = k;
              await this.sleep(100);
              renderBoard("solving");
              if (await this.solve(matrix)) {
                return true;
              } else {
                matrix[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  validate(i, j, k, matrix) {
    if (
      this.checkRow(i, k, matrix) &&
      this.checkCol(j, k, matrix) &&
      this.checkSubMatrix(i, j, k, matrix)
    ) {
      return true;
    }
    return false;
  }

  checkRow(row, num, matrix) {
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] == num) {
        return false;
      }
    }
    return true;
  }

  checkCol(col, num, matrix) {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][col] == num) {
        return false;
      }
    }
    return true;
  }

  checkSubMatrix(row, col, num, matrix) {
    for (
      var x = 3 * Math.floor(row / 3);
      x < 3 * Math.floor(row / 3) + 3;
      x++
    ) {
      for (
        var y = 3 * Math.floor(col / 3);
        y < 3 * Math.floor(col / 3) + 3;
        y++
      ) {
        if (matrix[x][y] == num) {
          return false;
        }
      }
    }
    return true;
  }

  jumbel(board, time) {
    while (time > 0) {
      let i = this.random();
      let j = this.random();
      if (board[i][j] == 0) {
        let k = this.random();
        if (this.validate(i, j, k, board)) {
          board[i][j] = k;
          time--;
        }
      }
    }
    return board;
  }

  random() {
    return Math.floor(Math.random() * 9);
  }

  sleep = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };
}
