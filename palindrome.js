// Given a string, return true if the string is a palindrome
// or false if it is not. 
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*** First Solution ***/ 
const palindrome = (str) => {
    let reverse = '';
    for(let char of str) {
        reverse = char + reverse;
    }
    return str === reverse;
}