import { useCallback, useMemo, useRef, useState } from "react";

function Counter() {
  let [num, setNum] = useState(10);
  let numb = useRef(0);
  // useRef is used to store the value and doesn't has anything related to State (usestate). anything you don't want to display but to store its value , in that case , we use useRef
  // also useRef don't re render . use state do
  function handleClick(e) {
    e.stopPropagation();
    setNum((num) => num + 10);
    numb.current++;
    console.log(numb.current);
  }
  const fibcall = useCallback(function fib(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  }, []);
  //if fib(40) we do , it will take to compute the value and hence freezes the browser
  //usememo hook basically used to store the value
  const fibmemo = useMemo(() => fibcall(num), [num, fibcall]);
  // const fibmemo = useMemo(()=>fib(num),[num])
  //it containes two parts : 1st- calculation function '()=>{fib(num)}' then give the value which is to be stored fib(num) :: 2nd- dependency array
  // here the function is not memoized , but the return value of this function is memoized . to make the function memoized , we use - usecallback
  return (
    <>
      <h1>
        {num} | {numb.current} || {fibmemo}
        <button onClick={handleClick}>ADD</button>
      </h1>
    </>
  );
}

export default Counter;
