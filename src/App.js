import './App.css';
import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setCounter(counter + 1);
    alert(`You clicked this button ${counter + 1} times`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.istockphoto.com/id/638460056/photo/single-lion-standing-proudly-on-a-small-hill.jpg?s=612x612&w=0&k=20&c=OyEKBg7dkPcR9wD3fwTUzXJHu7kdxgG3AgdKuMgBMf0=" alt="Lion- King of the jungle" />

        <button onClick={handleButtonClick}>Click Me</button>
        <p>You clicked this button {counter} times</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
