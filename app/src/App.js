import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div className='App-div'>
      <h1>Contatore che si aggiorna ad ogni click</h1>
      <MyButton count={count} onClick={handleClick} /> <br />
      <br />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({count, onClick} ) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


