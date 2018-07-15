// Given a string, return the character that is most
// commonly used in the string
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
    let obj = {},
        max = 0,
        maxChar = '';
  
    for(let char of str) {
      !obj[char] ? obj[char] = 1 : obj[char]++;
  
      if(obj[char] > max) {
        max = obj[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }