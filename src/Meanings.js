import React from 'react';
import Synonyms from './Synonyms';
import './Meanings.css';

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className='Meanings'>
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className='fs-5'>{definition.definition}</span>
            <span className='fst-italic fw-bolder opacity-75 $red-800'>
              '{definition.example}'
            </span>
          </div>
        );
      })}
      <Synonyms synonyms={props.meanings.synonyms} />{' '}
    </div>
  );
}
