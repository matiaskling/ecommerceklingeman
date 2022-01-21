
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCSpOrcuT8U5QZooXRPsl8uDpO5e0pIEg4",
  authDomain: "myecommerce-17cc2.firebaseapp.com",
  projectId: "myecommerce-17cc2",
  storageBucket: "myecommerce-17cc2.appspot.com",
  messagingSenderId: "1047159579554",
  appId: "1:1047159579554:web:f568112b6cca266c1ec8fb"
};


const app = initializeApp(firebaseConfig);


export const getFirestore = () => {
    return app
}