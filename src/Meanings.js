import React from 'react';
import Synonyms from './Synonyms';
import './Meanings.css';

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className='Meanings container d-flex'>
      <section className='shadow rounded p-3 m-3 mx-auto'>
        <h3 className='fw-bolder'>{props.meanings.partOfSpeech}</h3>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className='fs-5'>{definition.definition}</p>
              <p className='fst-italic fw-bolder opacity-75'>
                {definition.example}
              </p>
            </div>
          );
        })}
        <Synonyms synonyms={props.meanings.synonyms} />{' '}
      </section>
    </div>
  );
}
