import * as firebase from 'firebase';
import 'firebase/auth';
import'firebase/firestore';
import'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDccvRGd8j0wvcWx6mbdnDPrPXbUwZ3wUc",
    authDomain: "artisant-commerce.firebaseapp.com",
    projectId: "artisant-commerce",
    storageBucket: "artisant-commerce.appspot.com",
    messagingSenderId: "180488700753",
    appId: "1:180488700753:web:2a44727303f707eb768970",
    measurementId: "G-33Z09GBSSX"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const db=firebase.firestore();
  const storage= firebase.storage();
  export {auth,db,storage}