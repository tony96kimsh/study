import { useState } from 'react';

const DisplayCount: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    return(
        <>
            <p>숫자 : {count}</p>
            <button onClick={() => (setCount(count + 1))}
            >UP</button>
        </>
    )
}

export default DisplayCount; 