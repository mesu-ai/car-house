import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import firebseInitialize from '../pages/login/firebase/firebase.init';

firebseInitialize();

const useFirebase = () => {

    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoding,setIsLoading]=useState(true);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle=()=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {

            const user = result.user;
            setUser(user);
            
        }).catch((error) => {
            
            setError(error.message);
            
            
        }).finally(()=>setIsLoading(false));




    }

    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            } else {
                setUser({});
              
            }
            setIsLoading(false);
          });

          return ()=>unsubscribed;

       },[auth])



    const userLogOut=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          }).finally(()=>setIsLoading(false));

    }



    return {user,error,isLoding,signInUsingGoogle,userLogOut};
};

export default useFirebase;