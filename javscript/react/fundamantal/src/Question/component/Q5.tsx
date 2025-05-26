import { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0)

    const IncreaseCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p>count : {count}</p>
            <button onClick={IncreaseCount}>increase</button>
        </>
    )
}

export default Counter;