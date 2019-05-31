'use strict';

const max = numbers => Math.max(...numbers);

// let numTab = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
// 		    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
// 				[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
				
const numTab = [
	{arab: 1000, roman: 'M'},
	{arab: 900, roman: 'CM'},
	{arab: 500, roman: 'D'},
	{arab: 400, roman: 'CD'},
	{arab: 100, roman: 'C'},
	{arab: 90, roman: 'XC'},
	{arab: 50, roman: 'L'},
	{arab: 40, roman: 'XL'},
	{arab: 10, roman: 'X'},
	{arab: 9, roman: 'IX'},
	{arab: 5, roman: 'V'},
	{arab: 4, roman: 'IV'},
	{arab: 1, roman: 'I'},
];

function arab_to_roman(number) {
	let out = '';
	if (number <= 0) {
		return '';
	}
	numTab.forEach((elem) => {
		while ( number >= elem.arab){
			out += elem.roman;
			number -= elem.arab;
		}
	});
   return out;
}

function roman_to_arab(number) {
	 number = number.toUpperCase();
	let out = 0;
	let position = 0;
	numTab.forEach((elem, elemIndx) => {
		if (number.substr(position, elem.roman.length) == elem.roman) {
			out += elem.arab;
			position += elem.roman.length;
		}
		if (i <= numTab.length - 1 && position < number.length) {
			break;
		}
	});
	// for (let i = 0; i <= numTab.length - 1 && position < number.length;) {
	// 	if (number.substr(position, numTab[i].roman.length) == numTab[i].roman) {
	// 	    out += numTab[i].arab;
	// 	    position += numTab[i].roman.length;
	// 	}
	// 	else {
	// 		i++;
	// 	}
	// }
	return out;
}

/*
	Созданием функции в функцие заниматься не вижу смысла - не понимаю зачем это надо делать...
*/
function roman(number) {
	const reg_num = /[0-9]{1,}/i;
	const reg_roman = /^((?:M{0,3}?(?:D?C{0,3}|C[DM])?(?:L?X{0,3}|X[LC])?(?:I{0,3}?V?I{0,3}|I[VX])))$/igs;
	if (reg_num.test(number)) {
		return arab_to_roman(number);
	} else {
		if (reg_roman.test(number) && number != '') {
			return roman_to_arab(number);
		} else {
			return "Wrong input!"
		}
	}
}

