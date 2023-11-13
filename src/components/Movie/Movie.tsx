import React from 'react';
import {Movie} from '../../types';


const Movie: React.FC<Movie> = ({id, image, title, year, genre }) => {
  return (
    <>
      <div key={id} className="col">
        <div className="card h-100" style={{ width: '300px' }} >
          <img src={image} className="card-img-top" alt="movie poster" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              <strong>Year:</strong> {year}
            </p>
            <p className="card-text">
              <strong>Genre:</strong> {genre}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;