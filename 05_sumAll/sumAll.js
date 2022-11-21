const sumAll = function(num1, num2) {

    let finalSum = 0;
    if(num1 < 0 || num2 < 0 || Number(num1) !== num1 || Number(num2) !== num2) {
        return "ERROR";
    }

    if(num1 < num2) {
    for(let i = num1; i <= num2; i++) {
        finalSum += i;
        }
    } else if (num1 > num2) {
    for(let i = num2; i <= num1; i++) {
        finalSum += i;
        }
    }
    return finalSum;
    
};

// Do not edit below this line
module.exports = sumAll;
