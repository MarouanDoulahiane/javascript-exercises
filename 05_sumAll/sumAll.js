const sumAll = function(start, end) {
	if (!Number.isInteger(start) || !Number.isInteger(end)
			|| start < 0 || end < 0)
		return "ERROR";
	first = start < end? start: end;
	second = start > end? start: end;

	sum = 0;
	while (first <= second)
	{
		sum += first;
		first++;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
