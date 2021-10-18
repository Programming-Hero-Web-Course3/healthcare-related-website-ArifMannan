import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth"
import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init"
FirebaseInitialize();
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
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
            .finally(() => setIsLoading(false));
    }
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         }
    //         else {
    //             setUser({})
    //         }
    //         setIsLoading(false);
    //     });
    // }, []);
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return {
        googleLoginHandler,
        user,
        logOut,
        isLoading
        

    }
};
export default UseFirebase;