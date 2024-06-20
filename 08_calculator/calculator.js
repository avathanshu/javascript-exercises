const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sumOfNums = array.reduce((total, currentItem) => {
    return total+currentItem;
  }, 0)
  return sumOfNums
};

const multiply = function(array) {
  let productOfNums = array.reduce((total, currentItem) => {
    return total*currentItem;
  })
  return productOfNums
};

const power = function(num1, num2) {
	return num1 ** num2
};
const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

console.log(factorial(3))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
