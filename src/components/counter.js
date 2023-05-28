import { useState } from "react";

function Counter() {
  let [num , setNum] = useState(0);
  function handleClick(e) {
    e.stopPropagation();
    setNum(num=>num+1)
    console.log(num);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleClick}>ADD</button>
    </>
  );
}

export default Counter;
