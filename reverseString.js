// Given a string, return a new string with the reversed order of characters
// --- Examples
//  reverse('apple') === 'leppa'
//  reverse('hello') === 'olleh'
//  reverse('Greetings!') === '!sgniteerG'

/*** First Solution ***/
function reverse(str) {
  return str.split('').reverse().join('');
}

reverse('apple');