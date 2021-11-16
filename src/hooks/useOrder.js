import  { useEffect, useState } from 'react';

const useMyself = () => {
    
    const [orders,setOrders]=useState([]);
    
   
    useEffect(()=>{
        fetch(`https://boiling-falls-94406.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>{
            
            setOrders(data);
        })

    },[]);
    
    return {orders,setOrders};
};

export default useMyself;