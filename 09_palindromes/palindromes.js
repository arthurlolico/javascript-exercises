const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[\s,\.!]/g, "");
    let flag = 1;
    let i = 0;


    let strLength = newString.length;
    if(strLength%2 === 0) {
        while(i < strLength && flag === 1) {
            if(newString[i] !== newString[strLength - 1])
                flag = 0;
            i++;
            strLength--;
        }
    }
    else {
        while(i <= strLength && flag === 1) {
            if(newString[i] !== newString[strLength - 1])
                flag = 0;
            i++;
            strLength--;
        }
    }
    if (flag === 1)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
