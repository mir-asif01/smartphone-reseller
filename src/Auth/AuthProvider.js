import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})
    const [loader,setLoader] = useState(false)

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutHandler =()=>{
        setLoader(true)
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

    const loginWithWEmailPass=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

   

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo = { user, googleLogin , signOutHandler ,createUser,upadateUserName,loginWithWEmailPass,loader,setLoader}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;