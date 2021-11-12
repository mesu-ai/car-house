import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContex= createContext();

const AuhProvider = ({children}) => {
    const allcontex= useFirebase();


    return (
        <AuthContex.Provider value={allcontex}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuhProvider;