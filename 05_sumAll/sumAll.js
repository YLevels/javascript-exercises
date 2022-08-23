const sumAll = function(a, b) {

    let array = [];
    
    if ( !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 ) {
        return "ERROR"
    }
    
    if (a < b) {
        let length = b-a+1;
        for (let i = 0; i < length; i++) {
            array.push(a);
            a++;
        }
        let sum = array.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        return sum;
    //return array;
    }

    else {
        let length = a-b+1;
        for (let i = 0; i < length; i++) {
            array.push(b);
            b++;
        }
        let sum = array.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
        return sum;
    //return array;
    }

};

// Do not edit below this line
module.exports = sumAll;
