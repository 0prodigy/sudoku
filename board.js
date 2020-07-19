class Sudoku {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }

  makeBoard() {
    let board = [];
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (j == 0) {
          board.push([]);
        }
        board[i].push(0);
      }
    }
    return board;
  }
}

export default Sudoku;
