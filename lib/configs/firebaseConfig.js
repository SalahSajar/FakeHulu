import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC__FIREBASE__API_KEY,
  authDomain: process.env.NEXT_PUBLIC__FIREBASE__AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC__FIREBASE__DATABASE_URL,
  projectId: "fakehulu",
  storageBucket: "fakehulu.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC__FIREBASE__MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC__FIREBASE__APP_ID,
  measurementId: process.env.NEXT_PUBLIC__FIREBASE__MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
