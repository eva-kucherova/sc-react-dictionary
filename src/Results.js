import React from 'react';

export default function Results(props) {
  if (props.results) {
    return <div className='Results'>search results</div>;
  } else {
    return null;
  }
}
