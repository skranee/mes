const compareObjects = (a, b) => {
    if (a === b) return true;

    const keys_a = Object.keys(a);
    const keys_b = Object.keys(b);

    if (typeof a !== 'object' || typeof b !== 'object') {
        return false;
    }

    for (const key of keys_a) {
        if (!keys_b.includes(key) || !compareObjects(a[key], b[key])) {
            return false;
        }
    }

    return true;
}

const first = {
    name: 'John',
    surname: 'Doe',
    children: {
        first: {
            name: 'Kevin'
        },
        second: {
            name: 'Ally'
        }
    }
}

const second = {
    name: 'John',
    surname: 'Doe',
    children: {
        first: {
            name: 'Kevin'
        },
        second: {
            name: 'Ally'
        }
    }
}

const third = {
    name: 'Mike',
    surname: 'Ross'
}

console.log(compareObjects(first, second)); // true
console.log(compareObjects(first, third)); // false
