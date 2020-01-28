import React from 'react';
import {useHistory} from 'react-router-dom';

const MovieCard = ({movie}) => {
  const { title, director, metascore, stars, id } = movie;
  const history = useHistory();
  return ( <div className="movie-card" onClick={() => {history.push(`/movies/${id}`)}}>
  <h2>{title}</h2>
  <div className="movie-director">
    Director: <em>{director}</em>
  </div>
  <div className="movie-metascore">
    Metascore: <strong>{metascore}</strong>
  </div>
  <h3>Actors</h3>

  {stars.map(star => (
    <div key={star} className="movie-star">
      {star}
    </div>
  ))}
</div>);
};

export default MovieCard;
