import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import {InDevInv} from "@lib/scripts/CheckIfInDevInv";

const firebaseConfig = {
  apiKey: InDevInv ? process.env.NEXT_PUBLIC__FIREBASE__API_KEY : process.env.FIREBASE__API_KEY,
  authDomain: InDevInv ? process.env.NEXT_PUBLIC__FIREBASE__AUTH_DOMAIN : process.env.FIREBASE__AUTH_DOMAIN,
  databaseURL: InDevInv ? process.env.NEXT_PUBLIC__FIREBASE__DATABASE_URL : process.env.FIREBASE__DATABASE_URL,
  projectId: "fakehulu",
  storageBucket: "fakehulu.appspot.com",
  messagingSenderId: InDevInv ? process.env.NEXT_PUBLIC__FIREBASE__MESSAGING_SENDER_ID : process.env.FIREBASE__MESSAGING_SENDER_ID,
  appId: InDevInv ? process.env.NEXT_PUBLIC__FIREBASE__APP_ID : process.env.FIREBASE__APP_ID,
  measurementId: InDevInv ? process.env.NEXT_PUBLIC__FIREBASE__MEASUREMENT_ID : process.env.FIREBASE__MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
