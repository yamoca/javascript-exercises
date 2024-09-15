function getAge(person) {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    return arr.sorgt((a, b) => getAge(b) - getAge(a))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
