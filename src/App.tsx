import { useState } from 'react'

function App() {
  // 初始值可以是固定值
  const [num, setNum] = useState(1)
  // 也可以是函数，但是不支持异步
  const [num2, setNum2] = useState(() => {
    const a = 2
    const b = 3
    return a + b
  })

  // 可以使用函数的形式，函数的参数是之前的值
  return (
    <div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
      <button onClick={() => setNum2((preNum) => preNum * 2)}>{num2}</button>
    </div>
  );
}

export default App;
