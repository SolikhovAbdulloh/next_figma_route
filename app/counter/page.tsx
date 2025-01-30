'use client'
import React, { useState } from "react";

const Counter = () => {
  const [count,setCount] = useState(0)

  const dec = () => setCount(count + 1) 
  const inc = () => setCount(count - 1); 
  

  return (
    <div className="flex items-center gap-4 justify-center h-[100vh]">
      <button onClick={dec} className="w-[100px] rounded-xl h-[40px] bg-green-400 text-black p-3 flex items-center justify-center">
        +
      </button>
      <span>{count}</span>
      <button onClick={inc} className="w-[100px]  rounded-xl h-[40px] bg-green-400 text-black p-3 flex items-center justify-center">
        -
      </button>
    </div>
  );
};

export default Counter;
