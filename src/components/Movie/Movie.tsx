import React from 'react';
import {MovieProps} from '../../types';

interface Props extends MovieProps {
  onOpenModal: () => void;
}

const Movie: React.FC<Props> = ({id, image, title, year, genre, onOpenModal }) => {
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
          <button className="btn btn-outline-info" onClick={onOpenModal}>information:</button>
        </div>
      </div>
    </>
  );
};

export default Movie;