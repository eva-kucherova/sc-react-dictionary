import React from 'react';
import Synonyms from './Synonyms';

export default function Meanings(props) {
  console.log(props.meanings);

  return (
    <div className='Meanings'>
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meanings.synonyms} />
    </div>
  );
}
