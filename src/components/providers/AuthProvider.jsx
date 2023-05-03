import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const user = {displayName: 'Al katra'}

    const AuthInfo = {
        user,
    }

    return (
        <AuthContext.Provider value={AuthInfo}  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;