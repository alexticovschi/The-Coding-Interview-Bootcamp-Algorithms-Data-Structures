// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character. Make sure the
// step has spaces on the right side!
// --- Examples
//   steps(2)   
//       '# '   
//       '##'   
//   steps(3)   
//       '#  '   
//       '## ' 
//       '###' 
//   steps(4)
//       '#   '   
//       '##  ' 
//       '### ' 
//       '####' 

// *** First Solution *** //
const steps = (n) => {
    let steps = '';
    for(let i = 1; i < n; i++) {
        steps += '#';
        console.log(steps + ' '.repeat(n - i));
    }
}
  
// *** Second Solution *** //
// #1 From 0 to n iterate through rows
// #2 create an empty string steps
// #3 From 0 to n iterate through columns
// #4 IF the current column is equal to to or less than the current row
//      Add a '#' to 'steps'
// #5 ELSE add a space to 'steps'
// #6 Console log 'steps'       
const steps = (n) => {
    for(let row = 0; row < n; row++) {
        let steps = '';
        console.log('row',row);

        for(let column = 0; column < n; column++) {
            console.log('column',column);
            if(column <= row) { 
                steps += "#";
            } else {
                steps += ' ';
            }
        }
        console.log(steps);
    }
}

steps(4);