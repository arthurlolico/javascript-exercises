const fibonacci = function(nthTerm) {
    if(nthTerm < 0)
        return "OOPS";
    else {
        let arrayFibonacci = [0,1];
        for(let i = 0;i < nthTerm - 1; i++) {
            arrayFibonacci.push(arrayFibonacci[i] + arrayFibonacci[i+1]);
        }

        return arrayFibonacci[nthTerm];
    }
}

// Do not edit below this line
module.exports = fibonacci;
