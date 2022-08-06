import React from 'react';
import Meanings from './Meanings';

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className='Results'>
        <h2>{props.results.word}</h2>
        <a
          href={props.results.phonetics[0].audio}
          target='_blank'
          rel='noreferrer'
          className='headphones me-3 text-black-50 shadow rounded btn btn-sm btn-outline-light'
        >
          <i class='fa-solid fa-volume-high'></i>
        </a>
        <span className='fs-5 text-black-50'>{props.results.phonetic}</span>

        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
