const winMess = document.getElementById("winMessage");
const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW"
];

const main = document.getElementById("maze");

let gameOver = false;

for (let rowAbsolute = 0; rowAbsolute < map.length; rowAbsolute++) {
  let row = map[rowAbsolute];
  let maze = document.createElement("div");
  maze.classList.add("mazeRow");
  for (let columnAbsolute = 0; columnAbsolute < row.length; columnAbsolute++) {
    let wall = document.createElement("div");
    wall.dataset.rowIndex = rowAbsolute;
    wall.dataset.cellIndex = columnAbsolute;
    maze.appendChild(wall);

    switch (row[columnAbsolute]) {
      case "W":
        wall.classList.add("wall");
        wall.dataset.cellType = "border";
        break;

      case "S":
        wall.setAttribute("id", "start");
        wall.dataset.cellType = "start";
        break;

      case " ":
        wall.classList.add("walkway");
        wall.dataset.cellType = "floor";
        break;

      case "F":
        wall.setAttribute("id", "finish");
        wall.dataset.cellType = "end";
        break;
    }
  }
  main.appendChild(maze);
}
//Elizabeth Scheidt assisted to make keyhandlers function.
let positionX = 0;
let positionY = 9;
const player = document.getElementById("player");
let start = document.getElementById("start");
start.appendChild(player);
let currentPosition = start;
document.addEventListener("keydown", handleMove);

function handleMove(event) {
  if (gameOver === false) {
    switch (event.key) {
      case "ArrowUp":
        makeMove(0, -1);
        break;

      case "ArrowDown":
        makeMove(0, +1);
        break;

      case "ArrowLeft":
        makeMove(-1, 0);
        break;

      case "ArrowRight":
        makeMove(+1, 0);
        break;
    }
  }
}
//Chris Wilson and Sasha Lukas Assisted with MakeMove Function^^

function makeMove(x, y) {
  let nextPositionUp = Number(currentPosition.dataset.rowIndex) + y;
  let nextPositionLeft = Number(currentPosition.dataset.cellIndex) + x;
  let nextMoveUp = document.querySelector(
    "[data-row-index = '" +
      nextPositionUp +
      "'][data-cell-index = '" +
      nextPositionLeft +
      "']"
  );
  if (
    nextMoveUp.dataset.cellType === "floor" ||
    nextMoveUp.dataset.cellType === "end"
  ) {
    nextMoveUp.appendChild(player);
    currentPosition = nextMoveUp;
    if (nextMoveUp.dataset.cellType === "end") {
      gameOver = true;
      winMess.innerHTML = "You Finished the Maze!";
    }
  }
}
