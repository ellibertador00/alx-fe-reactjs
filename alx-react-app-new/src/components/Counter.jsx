import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Set to zero</button>
      <p>{count}</p>
    </>
  )
}