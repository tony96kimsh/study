import { useState } from 'react';

const ShowInput = () => {
    const [value, setValue] = useState<string>('')
    const ShowValue = (e:React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)} 
    return (
        <>
            <div>
                <input type="text" onChange={ShowValue} />
            </div>
            <p>입력 값 : {value} </p>
        </>
    )
}

export default ShowInput;