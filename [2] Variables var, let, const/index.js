const foo = () => {
    if (true) {
        var x = 1;
        console.log(x); // 1
    }

    console.log(x); // 1
}

foo();

// Only var is visible outside the block of code. [const, let] are only visible inside
