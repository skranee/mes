const increaseByTenPercent = (arr) => {
    if (!arr.every((item) => typeof item === 'number')) {
        return 'Not a valid array';
    }

    return arr.map((item) => (item * 1.1).toFixed(2));
}

// [ '110.00', '132.00', '154.00', '165.00', '1098.90' ]
console.log(increaseByTenPercent([100, 120, 140, 150, 999]));

// Not a valid array
console.log(increaseByTenPercent([100, 120, 140, 150, 999, 'hello']));
