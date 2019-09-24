import React from 'react';

export const LoginInfoContext = React.createContext({ 
    user: null, 
    auth: false,
    setAuth: (user: firebase.User) => {},
});