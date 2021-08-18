import React, { useState } from 'react';

const isPalindrom = (input)=>{
    input = input.replaceAll(' ', '');
    let start = 0, end = input.length - 1;
    if (end === -1) return ""; 
    while (start !== end && start < end){
        if(input[start] !== input[end])
            return "False";
        start++;
        end--;
    }
    return "True";
}

function Level1() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const handleChange = (e)=>{
        setInput(e.target.value);
        setResult(isPalindrom(e.target.value));
    }
  return (
    <>
        <h1>Level 1</h1>
        <input type="text" value={input} onChange={handleChange}/>
        <h2>{result}</h2>
    </>
  );
}

export default Level1;
