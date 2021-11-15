import  { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useMyself = () => {
    const {user}= useAuth();
   
    const [myself,setMyself]=useState([]);
    const url=`http://localhost:5000/orders?email=${user.email}`;
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           
            setMyself(data);
        })

    },[url, user.email]);
    
    return {myself,setMyself};
};

export default useMyself;