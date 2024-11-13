import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from './../firabase/firebase.init';
import { signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    // get the current user all data using useState hook 
    const [user, setUser] = useState(null)

    // make a create user function 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password) 
    }
    // make a login user function
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    // GET THE CURRENT USER 
    useEffect(()=>{
         onAuthStateChanged(auth, (currentUser)=>{
            if (currentUser) {
                console.log("that is a current user..", currentUser);
                setUser(currentUser)
            }
            else{
                console.log('not found current user..');
                setUser(null)
            }
        })
    },[])

    const signOutUser = ()=>{
        return signOut(auth)
    }
    // cretae a obj for all values 
    const authInfo = {
        name: 'JUBAYER',
        age: 21,
        createUser,
        loginUser,
        user,
        signOutUser,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
