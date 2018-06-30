// Given a string, return a new string with the reversed order of characters
// --- Examples
//  reverse('apple') === 'leppa'
//  reverse('hello') === 'olleh'
//  reverse('Greetings!') === '!sgniteerG'

/*** First Solution ***/
function reverse(str) {
    return str.split('').reverse().join('');
}

/*** Second Solution ***/
function reverse(str) {
    let reversed = [];
    [...str].forEach(letter => reversed.unshift(letter));
    return reversed.join('');
}

/*** Third Solution ***/
function reverse(str) {
    let reversed = '';
    for(let char of str) { reversed = char + reversed }
    return reversed;
}

/*** Fourth Solution ***/
function reverse(str) {
    return [...str].reduce((reversed, char) => char + reversed);
}

reverse('apple');