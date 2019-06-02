'use strict';

const max = numbers => Math.max(...numbers);

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

function arabToRoman(number) {
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

function romanToArab(number) {
	 number = number.toUpperCase();
	let out = 0;
	let position = 0;
	for (let i = 0; i <= numTab.length - 1 && position < number.length;) {
		if (number.substr(position, numTab[i].roman.length) == numTab[i].roman) {
				out += numTab[i].arab;
				position += numTab[i].roman.length;
		}
		else {
			i++;
		}
	}
	return out;
}

function roman(number) {
	const reg_roman = /^((?:M{0,3}?(?:D?C{0,3}|C[DM])?(?:L?X{0,3}|X[LC])?(?:I{0,3}?V?I{0,3}|I[VX])))$/igs;
	if (!isNaN(number)) {
		return arabToRoman(number);
	} else {
		if (reg_roman.test(number) && number != '') {
			return romanToArab(number);
		} else {
			return "Wrong input!"
		}
	}
}
