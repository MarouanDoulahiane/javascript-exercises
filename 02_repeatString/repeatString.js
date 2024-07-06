const repeatString = function(str, nbrTime) {
	if (nbrTime < 0)
		return "ERROR";
	return str.repeat(nbrTime);
};

// Do not edit below this line
module.exports = repeatString;
