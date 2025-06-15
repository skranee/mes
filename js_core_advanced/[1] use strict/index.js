'use strict';

const factorial = (n) => {
    if (n < 0) {
        throw Error('Not a valid number');
    }

    let result = 1;
    for (let i = 2; i <= n; ++i) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)) // 120
console.log(factorial(-10)) // Error: Not a valid number
