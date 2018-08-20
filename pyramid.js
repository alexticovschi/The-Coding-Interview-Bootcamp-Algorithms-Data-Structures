// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
//  with N levels using the # character. Make sure the
//  pyramid has spaces on both left and right hand sides
// --- Examples
//   pyramid(1)
//      '#'
//   pyramid(2)
//      ' # '
//      '###'
//   pyramid(3)
//      '  #  '
//      ' ### '
//      '#####'

// #1 From 0 to n (iterate through rows)
// #2  Create an empty string, 'level'
// #3  From 0 to ??? (columns)
// #4 IF the column should have a #
// #    Add a '#' to 'level'
// #  ELSE
// #    Add a space to 'level'
// #5 Console log 'level'


/*** First Solution ***/
const pyramid = (n) => {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for(let row = 0; row < n; row++) {
        let level = '';
        for (let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) { 
                level += "#";
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}


/*** Second Solution ***/
const pyramid = (n) => {
	for(let row = 0; row < n; row++) {
		let lvl = '#';
		for(let column = 0; column < n - 1; column++) {
            (row > column) ? lvl = '#' + lvl + '#' : lvl = ' ' + lvl + ' ';
		}
		console.log(lvl);
	}

}


pyramid(3);