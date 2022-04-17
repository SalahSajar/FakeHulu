import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLZOEENJ5fZ3eLpkRKCnWSIGQl0H9zEKs",
  authDomain: "fakehulu.firebaseapp.com",
  databaseURL: "https://fakehulu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fakehulu",
  storageBucket: "fakehulu.appspot.com",
  messagingSenderId: "386117380185",
  appId: "1:386117380185:web:325851dfdf431867f42948",
  measurementId: "G-FBQY9162CJ"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
