import React, { useState } from 'react';
import AllData from './Context';

function ContextProvider({ children }) {
  
  const [BookData, SetBookData] = useState([]);
  const [UserData, SetUserData] = useState({
    name: null,
    email: null,
    password: null,
  });
// Log the form data for verification
if(UserData.name && UserData.email && UserData.password){
console.log("User Data:", UserData);
}
// Books the form data for verification
console.log("Books Data:", BookData);
 

  return (
    <AllData.Provider
      value={{
        UserData,
        SetUserData,
        BookData,
        SetBookData,
      }}
    >
      {children}
    </AllData.Provider>
  );
}

export { AllData, ContextProvider };
