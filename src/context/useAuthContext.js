import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from "firebase/auth";
import { auth } from '../firebase'

 
const userAuthContext=  createContext();

export function UserAuthContextProvider ({children}) {
    const [user, setUser] = useState('')
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn( email, password ){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        signOut(auth)
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
    <userAuthContext.Provider value={{ user, signUp, signIn, logOut }}>
        {children}
    </userAuthContext.Provider>)
}

export function useUserAuth(){
    return useContext(userAuthContext);
}