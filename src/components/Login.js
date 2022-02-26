import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSetAuthedUser } from '../authedUser';

import './Login.css';
import { _getUsers } from '../utils/api';

export default function Login() {
  const [user, setUser] = useState('default');
  const query = useQuery('users', _getUsers);
  const setAuthedUser = useSetAuthedUser();

  const handleLogin = (e) => {
    e.preventDefault();
    setAuthedUser(user);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <select defaultValue={user} onChange={handleChange}>
          <option disabled name="default" value="default">
            Select a User
          </option>
          {Object.keys(query.data || []).map((user) => (
            <option key={user} name={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <div>
          <button className="btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
