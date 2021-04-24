import { useState } from "react";

export default function useCounter(){
  const [count, setCount] = useState(0);

  const add=()=>{
    setCount(count+1);
  }

  const less=()=>{
    setCount(count-1);
  }

  return {
    less,add,count
  }
}