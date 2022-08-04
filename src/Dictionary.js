import React, { useState } from 'react';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');

  function search(event) {
    event.preventDefault();
    return alert(`Searching for...${keyword}`);
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
