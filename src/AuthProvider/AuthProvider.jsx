import { createContext, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // Providers
    const googleProvider = new GoogleAuthProvider()

    // Functions
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogout = () => {
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    

    const authInfo = {
        createUser,
        userLogin,
        userLogout,
        googleLogin,
    }

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;