const fibonacci = function(num) {
    let currentResult = 1;
    let oldNumber = 0;
    let nextTerm = currentResult + oldNumber;

    if(num < 0) {
        return 'OOPS';
    }

    for(let i = 2; i <= num; ++i) {
        oldNumber = currentResult;
        currentResult = nextTerm;
        nextTerm = currentResult + oldNumber;
    }

    return currentResult;

};

// Do not edit below this line
module.exports = fibonacci;
