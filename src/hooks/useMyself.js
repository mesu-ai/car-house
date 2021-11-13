import  { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useMyself = () => {
    const {user}= useAuth();

    const [myself,setMyself]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            
            setMyself(data);
        })

    },[user.email]);
    
    return {myself,setMyself};
};

export default useMyself;