'use strict';
const max = numbers => Math.max(...numbers);
// let numTab = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
// 		    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
// 				[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
				
const numTab = {
	'M': 1000,
	'CM': 900,
	'D': 500,
	'CD': 400,
	'C': 100,
	'XC': 90,
	'L': 50,
	'XL': 40,
	'X': 10,
	'IX': 9,
	'V': 5,
	'IV': 4,
	'I': 1,
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function arabToRoman(number) {
	let out = '';
	if (number <= 0) {
		return '';
	}
	Object.values(numTab).forEach((elem) => {
		while ( number >= elem){
			out += getKeyByValue(numTab, elem);
			number -= elem;
		}
	});
   return out;
}

function romanToArab(number) {
	number = number.toUpperCase();
	let out = 0;
	let position = 0;
	// numTab.forEach((elem, elemIndx) => {
	// 	if (number.substr(position, elem.roman.length) == elem.roman) {
	// 		out += elem.arab;
	// 		position += elem.roman.length;
	// 	}
	// 	if (i <= numTab.length - 1 && position < number.length) {
	// 		break;
	// 	}
	// });
	for (let i = 0; i <= Object.values(numTab).length - 1 && position < number.length;) {
		const keyElem = getKeyByValue(numTab,Object.values(numTab)[i]);
		if (number.substr(position, keyElem.length) == keyElem) {
		    out += Object.values(numTab)[i];
		    position += keyElem.length;
		}
		else {
			i++;
		}
	}
	return out;
}

/*
	Созданием функции в функцие заниматься не вижу смысла - не понимаю зачем это надо делать...
*/
function roman(number) {
	if (Number.isNaN(number)) {
		return;
	}
	const regNum = /[0-9]{1,}/i;
	const regRoman = /^((?:M{0,3}?(?:D?C{0,3}|C[DM])?(?:L?X{0,3}|X[LC])?(?:I{0,3}?V?I{0,3}|I[VX])))$/igs;
	if (regNum.test(number)) {
		return arabToRoman(number);
	} else {
		if (regRoman.test(number) && number != '') {
			return romanToArab(number);
		} else {
			return "Wrong input!";
		}
	}
}

