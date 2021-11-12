import { useContext } from 'react';
import { AuthContex } from '../contex/AuhProvider';

const useAuth = () => {
    
    return useContext(AuthContex);
    
};


export default useAuth;