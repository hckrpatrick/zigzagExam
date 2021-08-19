import React from 'react';


function LevelTemplate({input, result, handle, level}) {
    const handleChange = (e)=>{
        handle(e);
    }
  return (
    <>
        <div className="Level">
            <div className="Input">
                <h1>Level {level}</h1>
                <input className="inputBox" type="text" value={input} onChange={handleChange}/>
            </div>
            <div className="Result">
                <h2>{result}</h2>
            </div>
        </div>
    </>
  );
}

export default LevelTemplate;
