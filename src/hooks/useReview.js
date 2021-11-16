import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews,setReviews]= useState([]);
    const [topReviews,setTopReviews]= useState([]);
    useEffect(()=>{
    fetch('https://boiling-falls-94406.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data=>{
        
        setTopReviews(data.slice(-3));
        setReviews(data);
    
    });

    },[]);
    

    return {reviews,setReviews,topReviews};
};

export default useReview;