import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from './../firabase/firebase.init';
import { signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    // make a create user function 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    // cretae a obj for all values 
    const authInfo = {
        name: 'JUBAYER',
        age: 21,
        createUser,
        loginUser,
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
