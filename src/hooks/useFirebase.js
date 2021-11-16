import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import firebseInitialize from '../pages/login/firebase/firebase.init';


firebseInitialize();

const useFirebase = () => {

    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setLoading]=useState(true);
    const [isAdmin,setAdmin]=useState(false);
    

    // console.log(isAdmin);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle=(location,history)=>{
        const redirect_uri=location?.state?.from || '/';

        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            
            const user = result.user;
            setUser(user);
            history.push(redirect_uri);
            
            saveUser(user.email, user.displayName, "PUT");
            setError('');

            
        
            
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

            saveUser(email,name,"POST");
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

    const saveUser=(email,displayName,methodname)=>{
        const user={email,displayName};
        fetch('https://boiling-falls-94406.herokuapp.com/users',{
            method:methodname,
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(result=>{
            console.log(result);
        })

    }

    useEffect(()=>{
        
        fetch(`https://boiling-falls-94406.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin));
        
    },[user.email]);



    return {user,isAdmin,error,isLoading,signInUsingGoogle,signUpUsingEmailPassword,signInUsingEmailPassword,userLogOut};
};

export default useFirebase;