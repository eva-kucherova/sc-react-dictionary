import React from 'react';
import './App.css';
import Zoia_K from './Zoia_K.png';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={Zoia_K} alt='Zoia_K' className='img-fluid'></img>

          <h1> Dictionary App </h1>
        </header>
        <p>What is real meaning of</p>
        <button className='btn btn-primary'> Search </button>
      </div>
    </div>
  );
}
