import React from 'react';
import './App.css';
import Dictionary from './Dictionary';
import Zoia_K from './Zoia_K_svg.svg';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={Zoia_K} alt='Zoia_K' className='img-fluid'></img>

          <h1> Dictionary App </h1>
        </header>
        <main>
          <Dictionary />
        </main>

        <footer>
          Coded by{' '}
          <a
            href='https://zoia-k-responsive-portfolio.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            Zoia_K
          </a>
          , open sourced on{' '}
          <a
            href='https://github.com/zoia-k/sc-react-dictionary'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
