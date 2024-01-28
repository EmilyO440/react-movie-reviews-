import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './src/components/MovieList.js';
import MovieDetail from './src/components/MovieDetail.js';
import MovieReview from './src/components/MovieReview.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/movies/:id" component={MovieDetail} />
          <Route path="/review" component={MovieReview} />
          <Route path="/" component={MovieList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

