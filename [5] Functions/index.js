const repeat = (foo, interval) => {
    setInterval(() => {
        foo();
    }, interval);
}

const REPEAT_INTERVAL = 5 * 1000;
const logTime = () => {
    console.log(new Date().toLocaleString());
}

// 6/9/2025, 1:25:27 PM
// 6/9/2025, 1:25:32 PM
// 6/9/2025, 1:25:37 PM
repeat(logTime, REPEAT_INTERVAL);
