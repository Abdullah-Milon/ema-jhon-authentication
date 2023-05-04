import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{  //a
       return signOut(auth)  //b
    }

    // observer user auth state
    useEffect(() =>{
        // onAuthStateChanged(auth, currentUser =>{
     const unsubscribe =   onAuthStateChanged(auth, currentUser =>{ //c
            setUser(currentUser);
            setLoading(false)
        })
        //  stop observing while unmounting
        return () =>{
            return unsubscribe();
        }
    },[])

    // const user = {email: 'Al katra'}

    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={AuthInfo}  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;