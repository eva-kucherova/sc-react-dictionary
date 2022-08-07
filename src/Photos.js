import React from 'react';
import './Photos.css';

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className='Photos container d-flex'>
        <section className='shadow rounded p-3 m-3 mx-auto'>
          <div className='row'>
            {props.photos.map(function (photo, index) {
              return (
                <div className='col-4 ' key={index}>
                  <a href={photo.src.original} target='_blank' rel='noreferrer'>
                    <img
                      src={photo.src.landscape}
                      alt='keyword'
                      className='d-flex rounded my-2'
                    ></img>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
