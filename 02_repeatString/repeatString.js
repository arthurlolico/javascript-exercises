const repeatString = function(string,numberOfTimes) {
    let combinedString = "";
    if(numberOfTimes > -1){
        for(i = 0; i < numberOfTimes; i++) {
            combinedString = combinedString + string;
        }
    }
    else{
        combinedString = "ERROR";
    }
    return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
