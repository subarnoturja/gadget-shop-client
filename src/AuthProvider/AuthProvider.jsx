import { createContext, useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            //setLoading(false);
            if(currentUser){
                axios.post('http://localhost:5000/authentication',{
                    email: currentUser.email,
                }).then(data => {
                    if(data.data){
                        localStorage.setItem('access-token', data?.data?.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false)
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        userLogout,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;