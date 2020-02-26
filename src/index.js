
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let new_arr = [];
  let i,j;  

  if ( arguments.length == 0 ) {
    return [];
  }

  for ( i = 0; i < matrix.length; i++ ) {
    if ( (i+1) % 2 == 0 ) {
      matrix[i].reverse();
    }

    for ( j = 0; j < matrix[i].length; j++ ) {
      new_arr.push( matrix[i][j] );
    }    
  }
  return new_arr;
}
