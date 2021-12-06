import React, { createContext, useContext, useState } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UsersContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUser = () => useContext(UsersContext);

export { useUser, UsersProvider as default };
