import React from 'react';
import {useHistory, NavLink} from 'react-router-dom';


const SavedList = props => {
  const history = useHistory();
  
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} className="saved-movie" activeClassName="saved-active">{movie.title}</NavLink>
    ))}
    <div className="home-button" onClick={() => {history.push('/')}}>Home</div>
  </div>
) };

export default SavedList;
