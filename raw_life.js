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

function starting() {
  grid = getArray2D(columns, rows);
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return grid;
}

console.table(starting(getArray2D()));
