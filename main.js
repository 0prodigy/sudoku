const sudoku = new Sudoku();

const board = sudoku.defaultBoard;

function solveB() {
  solve(board);
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

window.onload = () => {
  renderBoard();
  let btn = document.getElementById("solve");
  btn.addEventListener("click", solveB);
};
