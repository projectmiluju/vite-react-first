import { useState } from "react";

export default function App() {
  
  const [count, setCount] = useState(0);

  const increase = () =>{
    setCount(count + 1)
  }

  const decrease = () =>{
    setCount(count -1)
  }

  return (
    <>
      <button onClick={decrease}>-</button> {count} <button onClick={increase}>+</button>
    </>
  )
}