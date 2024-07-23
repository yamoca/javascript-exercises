const sumAll = function(min, max) {
    let sum = 0;

    if (Number.isInteger(min) && Number.isInteger(max) && min > -1 && max > -1) {
        if (min > max) [min, max] = [max, min];
        for(let i = min; i <= max; i++) sum += i;
        return sum;
    } else return "ERROR";
    
};

// Do not edit below this line
module.exports = sumAll;
