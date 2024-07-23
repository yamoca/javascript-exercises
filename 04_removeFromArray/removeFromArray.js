const removeFromArray = function(inputArr, ...args) {
    // let arrLen = inputArr.length;
    // let argsLen = args.length;
    
    // for (let i = 0; i < argsLen; i++) {
    //     for (let j = 0; j < arrLen; j++) {
    //         if (inputArr[j] === args[i]) {
    //             inputArr.splice(j, 1);
    //             arrLen--;
    //             j--;
    //         }
    //     }
    // }
    // return inputArr;

    // create a new array and push items that are not in args (instead of removing undesired items from inputarr)
    const outputArr = []
    // iterate more cleanly
    inputArr.forEach(item => {
        if (!args.includes(item)) {
            outputArr.push(item)
        }
    });

    return outputArr;

};

// Do not edit below this line
module.exports = removeFromArray;
