const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  let sum = 0;
	for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  let multiplied = 1;
	for(let i = 0; i < numbers.length; i++) {
    multiplied *= numbers[i];
  }
  return multiplied;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if(num === 0) {
    return 1;
  } else {

	for(let i = num - 1; i >= 1; i--) {
    num *= i;
  }
 }
  return num;
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
