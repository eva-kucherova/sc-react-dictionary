import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary() {
  let [keyword, setKeyword] = useState('');
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      '563492ad6f91700001000001806fc7f0580441c882ad78ae6586f48e';
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className='Dictionary'>
      <h3 className='fs-6'>What is the real meaning of the word?</h3>
      <form onSubmit={search}>
        <input
          type='search'
          placeholder='Type ⌨ the word here...'
          onChange={keywordChange}
          className='shadow rounded ms-2'
        />
        <input
          type='submit'
          value='👀'
          className='ms-3 btn btn-sm btn-outline-light 
          '
        />
      </form>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
