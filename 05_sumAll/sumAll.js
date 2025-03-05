const sumAll = function(smallestNumber,highestNumber) {
    let i = 0;
    let sum = 0;
    let aux = 0;
    if(smallestNumber < 0 || highestNumber < 0 ||
        !Number.isInteger(smallestNumber) || !Number.isInteger(highestNumber)
    ) 
        return "ERROR";
    else {
        if (smallestNumber > highestNumber) {
            aux = smallestNumber;
            smallestNumber = highestNumber;
            highestNumber = aux;
        }       
        for(i = smallestNumber; i <= highestNumber ; i++){
            sum = sum + i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
