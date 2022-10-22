import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCbnZkjsnGX_8RTr2r_r0BHWSPZq09THF0",
    authDomain: "project-71-fadb4.firebaseapp.com",
    projectId: "project-71-fadb4",
    storageBucket: "project-71-fadb4.appspot.com",
    messagingSenderId: "628205810953",
    appId: "1:628205810953:web:49bd8a10cb1dfaf0cb0fd8"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
