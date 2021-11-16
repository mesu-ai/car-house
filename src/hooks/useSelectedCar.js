import  { useEffect, useState } from 'react';

const useSelectedCar = (id) => {
    const [selectedCar,setSelectedCar]=useState([]);
    
    
    useEffect(()=>{
        fetch(`https://boiling-falls-94406.herokuapp.com/cars/${id}`)
        .then(res=>res.json())
        .then(data=>{
            
            setSelectedCar(data);
        })

    },[id]);
    // console.log(cars,latestCars);

    return {selectedCar};
};

export default useSelectedCar;