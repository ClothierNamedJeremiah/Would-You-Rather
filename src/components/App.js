import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login';
import Leaderboard from './Leaderboard';
import NewQuestion from './NewQuestion';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import QuestionPage from './QuestionPage';
import { useAuthedUser } from '../authedUser';

export default function App() {
  const authedUser = useAuthedUser();

  if (authedUser === null) {
    return (
      <Router>
        <Login />
      </Router>
    );
  }

  return (
    <Router>
      <div className="container">
        <Navbar />
        <h1>Would you Rather?</h1>
        <Route exact path="/" component={Dashboard} />
        <Route path="/question/:id" component={QuestionPage} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}
