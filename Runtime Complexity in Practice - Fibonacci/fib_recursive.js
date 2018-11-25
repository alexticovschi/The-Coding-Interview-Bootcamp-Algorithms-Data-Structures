/*** Fibonacci Series ***/ 

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where 
// each number is the sum of the preceeding two.
// For example, the sequence [0,1,1,2,3,5,8,13,21,34] 
// forms the first ten entries of the fibonacci series
// Example: fib(4) => 3 

// Runtime Complexity : Exponential O(2^n)
function fib(n) {
    return (n < 2) ? n : fib(n-2) + fib(n-1);
}