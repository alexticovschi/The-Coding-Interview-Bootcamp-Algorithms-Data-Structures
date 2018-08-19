// --- Write a function that accepts an integer N and
//     returns a NXN spiral matrix.
// --- Examples 
//   spiral(2) returns [[1, 2],
//                      [4, 3]]
//   spiral(3) returns [[1, 2, 3],
//                      [8, 9, 4],
//                      [7, 6, 5]]
//   spiral(4) returns [[1,  2,  3,  4],
//                      [12, 13, 14, 5],
//                      [11, 16, 15, 6],
//                      [10,  9,  8, 7]]


// #1 Create an empty array of arrays called 'result
// #2 Create a counter variable, starting at 1
// #3 As long as (start column <= end column) AND (start row <= end row)
// #4    Loop from start column to end column
// #5       At results[start_row][i] assign counter variable
// #6       Increment counter
// #7    Increment start row
// #8    Loop from start row to end row
// #9       At results[i][end_column] assign counter variable
// #10      Increment counter
// #11   Decrement end column   
// #12   ...repeat for other two sides

function spiral(n) {
  let results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // Start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

spiral(5);