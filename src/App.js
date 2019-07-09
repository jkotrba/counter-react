import React from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter allowDecrement={true} allowNegative={true} />
    </div>
  );
}

export default App;
