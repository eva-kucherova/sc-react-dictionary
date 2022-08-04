import React, { useState } from 'react';
import axios from 'axios';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for...${keyword}`);
    let apiUrl = `http://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <h2>What is the real meaning of the word</h2>
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
    </div>
  );
}
