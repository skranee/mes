const chain = (tasks) => {
    let result = Promise.resolve();

    tasks.forEach(task => {
        result = result.then(() => task());
    });

    return result;
}

const first = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('First task done');
        resolve();
    }, 1000)
})

const second = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('Second task done');
        resolve();
    }, 1000)
})

const third = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('Third task done');
        resolve();
    }, 1000)
})

chain([first, second, third])
    .then(() => console.log('Successfully done!'))
    .catch((err) => console.error(err))

// First task done
// Second task done
// Third task done
// Successfully done!
