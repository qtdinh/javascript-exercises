const findTheOldest = function(array) {
     return array.reduce(function(a, b) {
        // return lastGuy > nextGuy ? -1 : 1;
        const oldestAge = getAge(a.yearOfBirth, a.yearOfDeath);
        const currentAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return oldestAge < currentAge ? b : a;
})
};

function getAge (birth, death) {

    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
