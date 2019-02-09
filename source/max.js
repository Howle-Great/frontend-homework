'use strict';

const max = numbers => Math.max(...numbers);

var numTab = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
		    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
		    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

function arab_to_roman(number) {
	if (number <= 0) {
		return '';
	}
	var out = '';
	for (var i = 0; i < numTab.length; i++) {
		while ( number >= numTab[i][0]){
			out += numTab[i][1];
			number -= numTab[i][0];
		}
	}
   return out;
}

function roman_to_arab(number) {
	var number = number.toUpperCase();
	var out = 0;
	var position = 0;
	for (var i = 0; i <= numTab.length - 1 && position < number.length;) {
		if (number.substr(position, numTab[i][1].length) == numTab[i][1]) {
		    out += numTab[i][0];
		    position += numTab[i][1].length;
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
	var reg_num = /[0-9]{1,}/i;
	var reg_roman = /^((?:M{0,3}?(?:D?C{0,3}|C[DM])?(?:L?X{0,3}|X[LC])?(?:I{0,3}?V?I{0,3}|I[VX])))$/igs;
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

