import  { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useMyreview = () => {
    const {user}= useAuth();

    const [reviewMyself,setReviewMyself]=useState([]);
    const url=`https://boiling-falls-94406.herokuapp.com/reviews?email=${user.email}`;
    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
           
            setReviewMyself(data);
        })

    },[url, user.email]);
    
    return {reviewMyself,setReviewMyself};
};

export default useMyreview;