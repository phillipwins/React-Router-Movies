import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SavedList({ list }) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map((movie, index) => (
        <span key={index} className="saved-movie">
          {movie.title}
        </span>
      ))}
      <div onClick={handleHomeClick} className="home-button">Home</div>
    </div>
  );
}
