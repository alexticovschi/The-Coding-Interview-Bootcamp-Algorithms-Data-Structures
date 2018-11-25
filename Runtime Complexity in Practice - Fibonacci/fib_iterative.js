/*** Fibonacci Series ***/ 

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where 
// each number is the sum of the preceeding two.
// For example, the sequence [0,1,1,2,3,5,8,13,21,34] 
// forms the first ten entries of the fibonacci series
// Example: fib(4) => 3 

// Runtime Complexity : Linear time O(n)
function fib(n) {
    let fibs = [0, 1];
  
    for (var i = 2; i <= n; i++) {
      // console.log('fibs[i-2]:',fibs[i-2],'fibs[i-1]:',fibs[i-1])
      // console.log('Value pushed in fibs array:', fibs[i-2]+fibs[i-1])
      fibs.push(fibs[i-2]+fibs[i-1]); 
    }
    // console.log(fibs)
    return fibs[n];
}