const getRandomJoke = async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) {
        throw new Error('Failed to fetch a random joke');
    }
    return await response.json();
}

(async () => {
    const joke = await getRandomJoke();
    console.log(joke.setup);
    setTimeout(() => {
        console.log(joke.punchline);
    }, 1000);
})()
