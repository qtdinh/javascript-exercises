const removeFromArray = function(array, ...theArgs) {

    for(const arg of theArgs) {
        if(!array.includes(arg)) {
            continue;
        }
        const index = array.indexOf(arg);
        const removed = array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
