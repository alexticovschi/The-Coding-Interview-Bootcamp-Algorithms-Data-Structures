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

/*** Second Solution ***/ 
const palindrome = (str) => [...str].reverse().join('') === str;

/*** Third Solution ***/ 
const palindrome = (str) => {
    // remove all space from string and turn every letter to lower case
    let newstr = str.replace(/ /g,'').toLowerCase();
    let arr = [...newstr];
    return arr.every(char => char === arr.pop());
}

palindrome('A Santa dog lived as a devil God at NASA');