const delayFunction = (callback) => {
    return new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, 2000)
    })
}

const foo = () => {
    console.log('Something happened here');
}

console.log(new Date().toLocaleString());
delayFunction(foo)
    .then(() => console.log(new Date().toLocaleString()))

// 6/9/2025, 2:46:19 PM
// Something happened here
// 6/9/2025, 2:46:21 PM
