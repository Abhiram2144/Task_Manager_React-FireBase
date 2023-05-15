import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBR64L8Sgp42PNcV0qjagWKj314IkLDIPI",
  authDomain: "todospace-c3bc5.firebaseapp.com",
  databaseURL:"https://todospace-c3bc5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todospace-c3bc5",
  storageBucket: "todospace-c3bc5.appspot.com",
  messagingSenderId: "562749664040",
  appId: "1:562749664040:web:795034b19d8adb7a3fbe1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);