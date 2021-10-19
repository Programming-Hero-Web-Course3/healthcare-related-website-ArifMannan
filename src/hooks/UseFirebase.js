import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth"
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init"
FirebaseInitialize();
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    
    const googleLoginHandler = () => {
        return signInWithPopup(auth, googleProvider);
            
    }
    const logOut = () => {
        signOut(auth)
            .then(result => {
                setUser({});
            })
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setLoading(false);
        });
    }, []);
    // useEffect(() => {
    //     const unsubscribed = onAuthStateChanged(auth, user => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             setUser({})
    //         }
    //         setIsLoading(false);
    //     });
    //     return () => unsubscribed;
    // }, [])
    return {
        googleLoginHandler,
        user,
        logOut,
        loading
        

    }
};
export default UseFirebase;