import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthedUser, useSetAuthedUser } from '../authedUser';

export default function Navbar() {
  const authedUser = useAuthedUser();
  const setAuthedUser = useSetAuthedUser();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthedUser(null);
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
        <li style={{ color: 'grey', fontStyle: 'italic' }}>Logged in as {authedUser}</li>
        <li>
          <NavLink to="/login" activeClassName="active" onClick={handleLogout}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
