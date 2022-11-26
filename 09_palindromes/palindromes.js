const palindromes = function (str) {
    //remove all non-alphanumeric characters
    //turn string into lowercase
    //make another string that is reversed
    //compare both strings
    //return true if palindrome, if not false
    let re = /\W+/g;

    let regularStr = str.toLowerCase().replace(re, '');

    let reverseStr = regularStr.split('').reverse().join('');

    if(regularStr === reverseStr) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
