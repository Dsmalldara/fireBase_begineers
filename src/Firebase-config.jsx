import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAEWmqjE8RuAtvVriN4m8Hqy3Zlh3YZbzQ",
    authDomain: "fir-project1-54b80.firebaseapp.com",
    projectId: "fir-project1-54b80",
    storageBucket: "fir-project1-54b80.appspot.com",
    messagingSenderId: "1090118834803",
    appId: "1:1090118834803:web:715823b47c49ec47e8e806",
    measurementId: "G-RH2W8EM1PG"
  };

  const app = initializeApp(firebaseConfig);
export  const  db = getFirestore(app)
