import { useCallback, useMemo, useState, useRef } from "react";


// const HookRef : React.FC = () => {
//     const inputRef = useRef<HTMLInputElement> (null);

//     const focusInput = () => {
//         inputRef.current.focus();
//     }
//     return (
//         <div>
//             <input type = "text" ref={inputRef} />
//             <button onClick={focusInput}>포커스 설정</button>
//         </div>        
//     )
// }

// export default HookRef;

// const HookMemo : React.FC = () => {
//     const [count, setCount] = useState<number>(0);
//     const [show, setShow] = useState<boolean>(true);

//     const excal = useMemo<number>(() => {
//         return count * 3;
//     }, [count])
    
//     return (
//         <div>
//             <p>계산 결과 : { excal } </p>
//             <button onClick={ () => setCount(count + 1) }>카운트 증가</button>
//             <button onClick={() => setShow(!show)}>토글 버튼</button>
//             {show && <p>Show is true</p>}
//         </div>
//     )
// }

// export default HookMemo;


const HookCallback : React.FC = () => {
    const [count, setCount] = useState(0);
    const increment = useCallback(() => {
        setCount((prev) => (prev + 1))
    }, [])

    
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={ increment }>증가</button>
        </div>
    )
}

export default HookCallback