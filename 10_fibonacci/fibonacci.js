const fibonacci = function(iterations) {
    let start = 0;
    let next = 1;
    let temp = 0;
    if (iterations >= 0) {
        for (let i = 0; i < iterations; i++) {
            temp = start + next;
            start = next;
            next = temp;
        }
        return start;
    } else {
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
