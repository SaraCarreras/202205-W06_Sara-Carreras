let columns = 10;
let rows = 10;
// crear nested Array que es el grid vacío
function getArray2D(columns, rows) {
  let arr2D = new Array(columns);
  for (let i = 0; i < arr2D.length; i++) {
    arr2D[i] = new Array(rows);
  }
  return arr2D;
}

//ahora lleno el grid con random 1 y 0s
let grid;
let afterGrid;
function starting() {
  grid = getArray2D(columns, rows);
  //console.log(grid)
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }

  return grid;
}

//copy the grid to have the before and the after check
//DEEP COPYING:
const deepCopy = (arr) => {
  let copy = [];
  arr.forEach((elem) => {
    copy.push(elem);
  });
  return copy;
};

let arrayCopied = deepCopy(grid);

console.table(grid);
console.table(arrayCopied);
//implement the rules
// 1o count the number of live neighbours (for every grid[][] index)
//and apply the rules

//2o
