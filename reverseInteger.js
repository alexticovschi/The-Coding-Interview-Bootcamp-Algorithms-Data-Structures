// Given a integer, return an integer that is the reverse ordering of numbers. 
// --- Examples:
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


/*** First Solution ***/ 
const reverseInt = (int) => {
    let reversed = int.toString().split('').reverse().join('');
    if(reversed.includes('-')) {
	    reversed = '-' + reversed.slice(0, -1);;
    }
    return Number(reversed);
}


/*** Second Solution ***/ 
const reverseInt = (int) => {
    let reversed = int.toString().split('').reverse().join('');
    return Number(int < 0 ? reversed = '-' + reversed.slice(0, -1) : reversed);
}


reverseInt(-90);