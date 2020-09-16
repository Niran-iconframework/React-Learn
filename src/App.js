
//react-hook
import React, { useState } from 'react' 

function App() {
  const [count, setCount] = useState(0)
  //คล้ายๆกับการประการตัวแปร useState(0) เหมือนกกำหนดค่ามัน
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click +
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click -
        </button>
    </div>
  );
}

export default App
