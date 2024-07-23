const reverseString = function(inputStr) {
    // you can reverse an array so can just do inputStr.split("").reverse().join("");
    let inputArray = inputStr.split("");
    let len = inputArray.length;
    let reversedArray = [];
    for(let i = 0; i <= len; i++) {
        reversedArray.unshift(inputArray[i]);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
