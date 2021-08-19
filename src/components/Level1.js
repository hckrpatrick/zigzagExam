import React, { useState } from 'react';
import LevelTemplate from './LevelTemplate';

const isPalindrom = (input)=>{
    input = input.replaceAll(' ', '');
    let start = 0, end = input.length - 1;
    if (end === -1) return "Empty";
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
    const [result, setResult] = useState('Empty');
    const handleChange = (e)=>{
        setInput(e.target.value);
        setResult(isPalindrom(e.target.value));
    }
  return (
    <>
        <LevelTemplate input={input} result={result} level="1" handle={handleChange}></LevelTemplate>
    </>
  );
}

export default Level1;
