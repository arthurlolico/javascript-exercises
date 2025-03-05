const removeFromArray = function(array,element) {
    let i = 0;
    newArray = array;
    for(i = 1; i < arguments.length; i++){
        for(j = 0; j < array.length; j++){
            if(newArray[j] === arguments[i]){
                newArray.splice(j,1);
                j--;
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
