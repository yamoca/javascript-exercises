
const palindromes = function (word) {
    word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return word === word.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
