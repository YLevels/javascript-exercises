const removeFromArray = function(array, ...theArgs) {
    for (const arg of theArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg) {
                array.splice(i,1);
            }
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
