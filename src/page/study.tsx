import { useState } from 'react';
import './stuStyle.css'
function Wrapper() {
    return (
        <ul>
            <MyButton></MyButton>
            <MyButton></MyButton>
            <MyButton></MyButton>
        </ul>
    )
}

function MyButton() {
    const [age, setAge] = useState(1);
    const [btnClass] = useState('btn');
    function counter() {
        setAge(age + 1)
    }
    return (
        <div className="line">
            <button className={btnClass} onClick={counter} >i am a btn</button>
            <span>{age}</span>
        </div>

    )
}

export default Wrapper