const reverseString = function(text) {
    let reverse = "";
    let stringLength = text.length;
    while (stringLength > 0) {
        reverse = reverse + text[stringLength-1];
        stringLength--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
