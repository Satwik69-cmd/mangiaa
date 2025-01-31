import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIySQReO0CgE0zvDU9oHngrEYtpXz9Sx4",
    authDomain: "mujstay.firebaseapp.com",
    projectId: "mujstay",
    storageBucket: "mujstay.firebasestorage.app",
    messagingSenderId: "635394079484",
    appId: "1:635394079484:web:996ce82175d15dbe83f579",
    measurementId: "G-DQBCV5K7ZD",
    databaseURL:'https://mujstay-default-rtdb.firebaseio.com'
};

 

  export const app=initializeApp(firebaseConfig);

   
