import  { useEffect, useState } from 'react';

const useCars = () => {
    const [cars,setCars]=useState([]);
    const [latestCars,setLatestCars]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>{
            
            setLatestCars(data.slice(-6));
            setCars(data);
        })

    },[]);
    // console.log(cars,latestCars);

    return {cars,setCars,latestCars};
};

export default useCars;