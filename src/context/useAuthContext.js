import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    //signOut,
    onAuthStateChanged 
} from "firebase/auth";
import { auth } from '../firebase'

 
const userAuthContext=  createContext();

export function UserAuthContextProvider ({children}) {
    const [user, setUser] = useState('')
    function signUp(username, email, password){
        return createUserWithEmailAndPassword(auth, username, email, password)
    }
    function signIn( email, password ){
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    },[])

  return(
    <userAuthContext.Provider value={{ user, signUp, signIn }}>
        {children}
    </userAuthContext.Provider>)
}

export function useUserAuth(){
    return useContext(userAuthContext);
}