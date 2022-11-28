import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutHandler =()=>{
        return signOut(auth)
    }

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const upadateUserName =(name)=>{
        return updateProfile(auth.currentUser,{
            displayName : name
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = { user, googleLogin , signOutHandler ,createUser,upadateUserName}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;