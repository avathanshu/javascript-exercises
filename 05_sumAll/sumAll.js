const sumAll = function(num1, num2) {
    let sum = 0
    
    if ((Math.sign(num1) === -1 || Math.sign(num2) === -1) || ((Number.isInteger(num1) === false) || (Number.isInteger(num2) === false))) {
        return "ERROR"
    }

    else { 
        if (num2 > num1) {
            while (num1 <= num2) {
                sum = sum + num1
                num1++
            }
        }
    
        else {
            while (num2 <= num1) {
                sum = sum + num2
                num2++
            }
        }
    }
    

    return sum

}

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
