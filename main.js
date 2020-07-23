const sudoku = new Sudoku();

let board = sudoku.defaultBoard;

function solve() {
  if (sudoku.solve(board)) {
    console.log("true");
  } else {
    console.log("flase");
  }
  renderBoard();
}

function renderBoard() {
  let container = document.getElementById("sudoku");
  container.innerHTML = "";
  board.forEach((row) => {
    let rows = document.createElement("div");
    rows.setAttribute("class", "row");
    row.forEach((col) => {
      let column = document.createElement("input");
      column.value = col;
      rows.append(column);
    });
    container.append(rows);
  });
}

function newGame() {
  board = sudoku.makeBoard();
  sudoku.jumbel(board, 10);
  renderBoard();
}

window.onload = () => {
  renderBoard();
  let btn = document.getElementById("solve");
  btn.addEventListener("click", solve);
  let newSudoku = document.getElementById("newSudoku");
  newSudoku.addEventListener("click", newGame);
};
