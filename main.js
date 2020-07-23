const sudoku = new Sudoku();

let board = sudoku.defaultBoard;

function solve() {
  let container = document.querySelector(".sudoku-container");
  if (sudoku.solve(board)) {
    container.classList.add("valid-matrix");
  } else {
    container.classList.add("invalid");
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
      // await sudoku.sleep(100);
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
