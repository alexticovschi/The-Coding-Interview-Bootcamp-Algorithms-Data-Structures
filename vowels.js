// Write a function that returns the number of vowels
// used in a string
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why') --> 0

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

vowels('Why do you ask?');