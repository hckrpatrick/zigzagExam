import React, { useState } from 'react';
import LevelTemplate from './LevelTemplate';

const minPalindromeCuts = (str)=>{
    str = str.replaceAll(' ', '');
    if (str.length === 0) return "Empty";
    let palindromeMatrix = new Array(str.length);

    for (let i = 0; i < str.length; i++){
        palindromeMatrix[i] = new Array(str.length).fill(false);
        palindromeMatrix[i][i] = true;
    }

    for(let j = 0; j < str.length - 1; j++){
        if(str[j] === str[j+1]){
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
            }
        }
    }

    let cuts = new Array(str.length);

    for (let i = 0; i < str.length; i++) {
        if (palindromeMatrix[0][i])
            cuts[i] = 0;
        else {
            cuts[i] = str.length;
            for (let j = 0; j < i; j++) {
                if (palindromeMatrix[j + 1][i] && cuts[j] + 1 < cuts[i])
                    cuts[i] = cuts[j] + 1;
            }
        }
    }

    return cuts[str.length-1];
}

function Level3() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('Empty');
    const handleChange = (e)=>{
        setInput(e.target.value);
        setResult(minPalindromeCuts(e.target.value));
    }
  return (
    <>
        <LevelTemplate input={input} result={result} level="3" handle={handleChange}></LevelTemplate>
    </>
  );
}

export default Level3;
