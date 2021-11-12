import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import firebseInitialize from '../pages/login/firebase/firebase.init';

firebseInitialize();

const useFirebase = () => {

    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setLoading]=useState(true);


    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle=(location,history)=>{
        const redirect_uri=location?.state?.from || '/';

        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            
            const user = result.user;
            setUser(user);
            saveUser(user.displayName,user.email);

            history.push(redirect_uri);
        
            
        }).catch((error) => {
            
            setError(error.message);
            
            
        }).finally(()=>setLoading(false));


    }


    const signUpUsingEmailPassword=(name,email,password,location,history)=>{
        const redirect_uri=location?.state?.from || '/';

        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            
            const newUser={email:email,displayName:name};
            setUser(newUser);

            saveUser(name,email);

            // update user name
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {

                
              }).catch((error) => {
                  setError(error.message);
                
              });


              history.push(redirect_uri);



            
        })
        .catch((error) => {
            setError( error.message);
        
        }).finally(()=>setLoading(false));

    }


    const signInUsingEmailPassword=(email,password,location,history)=>{
        const redirect_uri=location?.state?.from || '/';
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {

            const user = result.user;
            setUser(user);
            history.push(redirect_uri);

            setError('');
        
           
        })
        .catch((error) => {
            
            setError(error.message);
        }).finally(()=>setLoading(false));
                
    }

    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            } else {
                setUser({});
              
            }
            setLoading(false);
          });

          return ()=>unsubscribed;

       },[auth])



    const userLogOut=()=>{
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message);
          }).finally(()=>setLoading(false));

    }

    const saveUser=(name,email)=>{
        console.log(name,email);

    }



    return {user,error,isLoading,signInUsingGoogle,signUpUsingEmailPassword,signInUsingEmailPassword,userLogOut};
};

export default useFirebase;