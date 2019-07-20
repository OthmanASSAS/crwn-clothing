import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCn7tDRz67qSm6cuPvGI2QHiqJGtGkJuPw",
    authDomain: "crwn-db-25fef.firebaseapp.com",
    databaseURL: "https://crwn-db-25fef.firebaseio.com",
    projectId: "crwn-db-25fef",
    storageBucket: "",
    messagingSenderId: "917370430764",
    appId: "1:917370430764:web:f2f21639720263b9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;