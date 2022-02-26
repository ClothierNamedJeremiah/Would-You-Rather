import React, { createContext, useContext, useState } from 'react';

const AuthedUserContext = createContext();
const SetAuthedUserContext = createContext();

export const useAuthedUser = () => useContext(AuthedUserContext);
export const useSetAuthedUser = () => useContext(SetAuthedUserContext);

export const AuthedUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <SetAuthedUserContext.Provider value={(user) => setUser(user)}>
      <AuthedUserContext.Provider value={user}>{children}</AuthedUserContext.Provider>
    </SetAuthedUserContext.Provider>
  );
};
