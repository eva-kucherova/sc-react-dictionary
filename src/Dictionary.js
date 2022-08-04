import React, { useState } from 'react';
import axios from 'axios';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function search(event) {
    event.preventDefault();
    return alert(`Searching for...${keyword}`);

    let apiUrl = 'http://api.dictionaryapi.dev/api/v2/entries/en/sunset';
    console.log(apiUrl);
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
