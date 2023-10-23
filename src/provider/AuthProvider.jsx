import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]= useState(false);
    const [photo,setPhoto]=useState()

    //Register 
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //update info(name,photo)
    const updateUser = (name,photoUrl)=>{
        {photoUrl && setPhoto(photoUrl)}
        {photoUrl || setPhoto("https://i.ibb.co/RjNr5mp/speaker2.jpg")}
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    //get current user
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log("Current User", currentUser)
        })

        return ()=>unSubscribe();
    },[])

    console.log("Current User from state", user)
    const authInfo = {
        setUser,
        user,
        loading,
        createUser,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;