import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKpRQNw3KZuuNpfJZqDrpW71hwmfAGY5k",
  authDomain: "traininglab-ee317.firebaseapp.com",
  projectId: "traininglab-ee317",
  storageBucket: "traininglab-ee317.firebasestorage.app",
  messagingSenderId: "285581697552",
  appId: "1:285581697552:web:3fbf955623879d543da095",
  measurementId: "G-53PH8ZB7ZC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
