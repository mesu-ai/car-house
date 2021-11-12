import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebseInitialize=()=>{

    initializeApp(firebaseConfig);
    
}

export default firebseInitialize;