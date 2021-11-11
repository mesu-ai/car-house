import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews,setReviews]= useState([]);
    useEffect(()=>{
    fetch('http://localhost:5000/reviews')
    .then(res=>res.json())
    .then(data=>setReviews(data.slice(-3)))

    },[]);
    

    return {reviews};
};

export default useReview;