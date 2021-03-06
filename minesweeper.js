document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[]
}


function randomBoard(){
  size = Math.floor((Math.random() * (7-3)) + 3);

  for (row = 0; row < size; row ++){
    for(col = 0; col < size; col ++){
      board.cells.push({row: row, col: col, isMine: false, isMarked: false, hidden: true})
    }
  }


  for (makeMine = 0; makeMine < size; makeMine ++){
    board.cells[Math.floor((Math.random() * (size * size)))].isMine = true;

      }
    }



  /*cells: [
    {row:0, col:0, isMine: true, hidden: true},
    {row:0, col:1, isMine: true, hidden: true},
    {row:0, col:2, isMine: true, hidden: true},
    {row:1, col:0, isMine: true, hidden: true},
    {row:1, col:1, isMine: false, hidden: true},
    {row:1, col:2, isMine: false, hidden: true},
    {row:2, col:0, isMine: true, hidden: true},
    {row:2, col:1, isMine: true, hidden: true},
    {row:2, col:2, isMine: false, hidden: true},*/


function startGame () {

  randomBoard();

  let cell = 0;
  for (cell in board.cells){
    board.cells[cell].surroundingMines = countSurroundingMines(cell);
  }








  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
  document.addEventListener('dblclick', tryAgain);




  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

  //check for win
function checkForWin () {
  var soundWin = document.getElementsByTagName('audio')[1];

  let nonMine = 0;
  let markedMine = 0;

  let checkCell = 0;
  for (checkCell in board.cells){
    if (board.cells[checkCell].hidden === true && board.cells[checkCell].isMine === false){
       nonMine += 0;

    } else if (board.cells[checkCell].isMine === true && board.cells[checkCell].isMarked === false){
        markedMine += 0;
    } else if (board.cells[checkCell].hidden === false && board.cells[checkCell].isMine === false){
        nonMine += 1;
    } else if (board.cells[checkCell].isMine === true && board.cells[checkCell].isMarked === true){
       markedMine += 1;
    }
}
if (nonMine == (size * size) - size && markedMine == size){
lib.displayMessage('Congratulations you avoided the Vampires! Double Click to play again.');
soundWin.play();
return
}

else if (nonMine == (size * size) - size + 1 && markedMine == size - 1){
lib.displayMessage('Congratulations you avoided the Vampires!! Double Click to play again.');
soundWin.play();
return

}

else if (nonMine == (size * size) - size + 2 && markedMine == size - 2){
lib.displayMessage('Congratulations you avoided the Vampires!! Double Click to play again.');
soundWin.play();
return
}

else if (nonMine == (size * size) - size + 3 && markedMine == size - 3){
lib.displayMessage('Congratulations you avoided the Vampires!! Double Click to play again.');
soundWin.play();
return
}

else if (nonMine == (size * size) - size + 4 && markedMine == size - 4){
lib.displayMessage('Congratulations you avoided the Vampires!! Double Click to play again.');
soundWin.play();
return
}

else if (nonMine == (size * size) - size + 5 && markedMine == size - 5){
lib.displayMessage('Congratulations you avoided the Vampires!! Double Click to play again.');
soundWin.play();
return
}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('Congratulations you avoided the Vampires!!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//var surroundingCells = lib.getSurroundingCells(board.cells.row, board.cells.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines (cell) {

  var surroundingCells = lib.getSurroundingCells(board.cells[cell].row, board.cells[cell].col);

let count = 0;
let selectedCell = 0;

  for (selectedCell in surroundingCells) {
    if (surroundingCells[selectedCell].isMine == true) {
      count += 1;
    }
  }
  return count;
}


//Play Again
function tryAgain(){

window.location.reload();

}

//sound
