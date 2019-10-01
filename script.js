const container = document.getElementById("container");

//map w= wall s= start and f=finish
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

function createMaze() {
  for (let rowIndex = 0; rowIndex < map.length; rowIndex += 1) {
    let rowView = document.createElement("div");
    rowView.classList.add("row");
    container.appendChild(rowView);
    for (let columnIndex = 0; columnIndex < map[0].length; columnIndex += 1) {
      let cellView = document.createElement("div");
      cellView.classList.add("cell");
      if (map[rowIndex][columnIndex] === "W") {
        cellView.classList.add("wallCell");
      } else if (map[rowIndex][columnIndex] === "S") {
        cellView.classList.add("startCell");
      } else if (map[rowIndex][columnIndex] === " ") {
        cellView.classList.add("pathCell");
      } else if (map[rowIndex][columnIndex] === "F") {
        cellView.classList.add("finishCell");
      }

      rowView.appendChild(cellView);
    }
  }
}
createMaze();

//CREATE MOVEMENT FOR PLAYER DIV

let player = document.createElement("div");
let starterCell = document.getElementsByClassName("startCell");
player.id = "player";
player.classList.add("player");
starterCell[0].appendChild(player);

let playerTop = 20;
let playerLeft = 20;

let playerbox = document.getElementById("playerbox");
document.addEventListener("keydown", movePlayer);
function movePlayer(e) {
  if (e.keyCode == 40) {
    playerTop += 5;
    console.log(e.code);
    player.style.top = playerTop + "px";
  }
  if (e.keyCode == 39) {
    playerLeft += 5;
    console.log(e.code);
    player.style.left = playerLeft + "px";
  }
  if (e.keyCode == 38) {
    playerTop -= 5;
    console.log(e.code);
    player.style.top = playerTop + "px";
  }
  if (e.keyCode == 37) {
    playerLeft -= 5;
    console.log(e.code);
    player.style.left = playerLeft + "px";
  }
}

function stayInsideBoundaries() {
  if (player === pathCell) {
    return;
  } else if (player === wallCell) {
    alert("Invalid Move");
  } else if (player === finishCell) {
    alert("You Finished the Maze!!!");
  }
}
