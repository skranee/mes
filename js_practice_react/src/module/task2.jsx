import {useEffect, useState} from "react";

export const Task2 = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    useEffect(() => {
        if (count > 10) {
            setColor('red')
        }
    }, [count, ]);

    const increaseCounter = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button style={{background: color}} onClick={increaseCounter}>
                Increase
            </button>
        </div>
    )
}