import { useState } from 'react';
function Wrapper() {
    const [count, setCount] = useState(1);
    function counterAdd() {
        setCount(count + 1)
    }
    return (
        <ul>
            <MyButton2 age={count} counter={counterAdd}></MyButton2>
            <MyButton2 age={count} counter={counterAdd}></MyButton2>
            <MyButton2 age={count} counter={counterAdd}></MyButton2>
        </ul>
    )
}

type Param = {
    age: number
    counter: any
}
function MyButton2(a: Param) {
    const config = {
        btnClass: 'btn',
        divClass: 'line'
    }
    let content:any = '';
    if (1 > 0) {
        content = <h2>hello</h2>
    } else {
        content = <h2>world</h2>
    }
    return (
        <div className={config.divClass}>
            <button onClick={a.counter} className={config.btnClass} >i am a btn</button>
            <span style={{color: '#eee', fontSize: '18px'}}>{a.age}</span>
            {content}
        </div>

    )
}

export default Wrapper