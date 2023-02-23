import './App.css'; 
import React, { useState } from 'react';

const App=()=> {
  const [result, setResult] = useState("");

  const handleClick =(e)=>{
    setResult(result.concat(e.target.value));
  }

  const clear=()=>{
    setResult("");
  }

  const calculate = () =>{
     try {
         setResult(eval(result).toString());
     } catch (error) {
         setResult("error")
     }
  }

  return (
  <>
    <nav className="navbar bg-dark bg-body-tertiary">
      <div className="container-fluid">
        <span  className="navbar-brand mb-0 h1">Calculator</span>
      </div>
    </nav>

    <div className='calc'>
    
      <div className='display-screen'>
          <input className='btn-input' value={result} type="text"/><span>
          <button  className='btn clearbtn' id="clear" onClick={clear}>C</button></span>
      </div>

        <div className='btn-class'>
          <button className='btn' value="2" onClick={handleClick}>2</button>
          <button className='btn' value="3" onClick={handleClick}>3</button>
          <button className='btn' value="1" onClick={handleClick}>1</button>
          <button className='btn' value="/" onClick={handleClick}>&divide;</button>
          <button className='btn' value="4" onClick={handleClick}>4</button>
          <button className='btn' value="5" onClick={handleClick}>5</button>
          <button className='btn' value="6" onClick={handleClick}>6</button>
          <button className='btn' value="-" onClick={handleClick}>-</button>
          <button className='btn' value="7" onClick={handleClick}>7</button>
          <button className='btn' value="8" onClick={handleClick}>8</button>
          <button className='btn' value="9" onClick={handleClick}>9</button>
          <button className='btn' value="+" onClick={handleClick}>+</button>
          <button className='btn' value="." onClick={handleClick}>.</button>
          <button className='btn' value="0" onClick={handleClick}>0</button>
          <button className='btn' value="*" onClick={handleClick}>&times;</button>
          <button className='btn' id="equal" onClick={calculate}>=</button>
        </div>

    </div>
  </>
  );
}

export default App;
