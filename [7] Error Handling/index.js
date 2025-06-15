const checkNumber = (num) => {
    if (!Number.isInteger(num)) {
        throw new Error('Number is not an integer');
    }
    console.log('Success');
}

try {
    checkNumber(52); // Success
    checkNumber(14); // Success
    checkNumber(123.42); // Error: Number is not an integer
} catch(err) {
    console.log(err);
}
