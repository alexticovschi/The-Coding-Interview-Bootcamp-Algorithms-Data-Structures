// Write a function that returns the number of vowels
// used in a string
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why') --> 0

/*** First Solution ***/ 
const vowels = (str) => {
    // '/[^\w\s]/gi' - regex to replace unwanted characters from the string
    str = str.replace(/[^\w\s]/gi, '').toLowerCase();
    const vowels = 'aeiou';
    let counter = 0;

    for(let i = 0; i < str.length; i++) {
        vowels.match(str[i]) && counter++;
    }
    
    return counter;
}

/*** Second Solution ***/ 
const vowels = (str) => {
    const vowels = ['a','e','i','o','u'];
    let counter = 0;

    for(let char of str.toLowerCase()) {
        vowels.includes(char) && counter++;
    }
    
    return counter;
}

vowels('Why do you ask?');