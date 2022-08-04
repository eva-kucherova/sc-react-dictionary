import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for...${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <h3>What is the real meaning of the word</h3>
      <form onSubmit={search}>
        <input
          type='search'
          placeholder='Type ⌨ the word here...'
          onChange={keywordChange}
        />
        <input
          type='submit'
          value='👀'
          className='ms-3 btn btn-sm btn-outline-light 
          '
        />
      </form>

      <Results results={results} />
    </div>
  );
}
