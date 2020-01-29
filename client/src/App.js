import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/">
          <MovieList/>
        </Route>
        <Route path="/movies/:movieID">
          <Movie addToSavedList={addToSavedList} savedList={savedList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
