const add = function(x,y) {
  return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
  const sumOfAll = arr.reduce((total,currentNumber) => {
    return total + currentNumber;
  },0);
	return sumOfAll;
};

const multiply = function(arr) {
  const multOfAll = arr.reduce((total,currentNumber) => {
    return total * currentNumber;
  },1);
  return multOfAll;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	if(x === 0 || x === 1)
    return 1;
  else {
    let fact = 1;
    let i = 1;
    while (i < x) {
      fact = fact*(i + 1);
      i++;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
