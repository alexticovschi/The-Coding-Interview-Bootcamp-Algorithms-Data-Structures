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

const steps = (n) => {
    let steps = '';
    for(let i = 1; i < n; i++) {
        steps += '#';
        console.log(steps + ' '.repeat(n - i));
    }
}
  
steps(4);