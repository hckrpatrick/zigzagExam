import React, { useState } from 'react';

const longestPalindrome = (str)=>{
    str = str.replaceAll(' ', '');
    if (str.length === 0) return "";
    let palindromeMatrix = new Array(str.length);
    let longStart = 0, longEnd = 0, maxLength = 1;
    for (let i = 0; i < str.length; i++){
        palindromeMatrix[i] = new Array(str.length).fill(false);
        palindromeMatrix[i][i] = true;
    }

    for(let j = 0; j < str.length - 1; j++){
        if(str[j] === str[j+1]){
            maxLength = 2;
            longStart = j;
            longEnd = j+1;
            palindromeMatrix[j][j+1] = true;
        }else{
            palindromeMatrix[j][j+1] = false;
        }
    }

    for (let k = 3; k <= str.length; ++k) {
        for (let i = 0; i < str.length - k + 1; ++i) {
            let j = i + k - 1;
            if (palindromeMatrix[i + 1][j - 1] && str[i] === str[j]) {
                palindromeMatrix[i][j] = true;
                if (k > maxLength) {
                    maxLength = k;
                    longStart = i;
                    longEnd = j;
                }
            }
        }
    }

    return str.substring(longStart, longEnd+1);
}

function Level2() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const handleChange = (e)=>{
        setInput(e.target.value);
        setResult(longestPalindrome(e.target.value));
    }
  return (
    <>
        <h1>Level 2</h1>
        <input type="text" value={input} onChange={handleChange}/>
        <h2>{result}</h2>
    </>
  );
}

export default Level2;
