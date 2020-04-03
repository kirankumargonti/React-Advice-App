import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState('');
  const nextAdvice = () => {
    Axios.get('https://api.adviceslip.com/advice')
      .then(res => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch(err => console.log(err));
  };
  useEffect(nextAdvice, []);

  return (
    <div className='card'>
      <h1>{advice}</h1>
      <button type='submit' onClick={nextAdvice}>
        Next Advice
      </button>
    </div>
  );
};

export default App;
