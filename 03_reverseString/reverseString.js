const reverseString = function(string) {
    let original = string;
    let reverse = "";

    for (i = string.length - 1; i>=0; i--) {
        reverse += original.slice(i, i+1);
    }

    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
