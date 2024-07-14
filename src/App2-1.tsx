import { useState, useEffect } from 'react'

function App() {
  const [num, setNum] = useState(1)

  // useEffect
  useEffect(() => {
    console.log('useEffect')
    const timer = setInterval(() => {
      console.log('hihihi')
      setNum(num + 1)
    }, 2000)
    return () => {
      console.log('clear')
      clearInterval(timer)
    }
    // 数组用来标识依赖，没有变化就不会重复执行, 一般放一个state
  }, [num])

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </div>
  );
}

export default App;
