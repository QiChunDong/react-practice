import { useState, useEffect } from 'react'

function App() {
  const [num, setNum] = useState(1)

  // useEffect
  async function getData() {
    const data = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(234)
      }, 2000)
    })
    return data
  }

  useEffect(() => {
    console.log('useEffect')
    getData().then(d => {
      setNum(d)
    })
    // 数组用来标识依赖，没有变化就不会重复执行
  }, [new Date()])

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </div>
  );
}

export default App;
