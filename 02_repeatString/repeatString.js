const repeatString = function(inputStr, repeatNum) {
    if (repeatNum < 0) {
        return "ERROR";
    }
    let repeatedStr = "";
    while(repeatNum > 0) {
        repeatedStr += inputStr;
        repeatNum -= 1;
    }

    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
