import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAulrR1joRb7Its7wvmSXKATRn8tIwqMOs",
    authDomain: "crwn-db-9e478.firebaseapp.com",
    projectId: "crwn-db-9e478",
    storageBucket: "crwn-db-9e478.appspot.com",
    messagingSenderId: "957103754994",
    appId: "1:957103754994:web:e299dbac2f6ceac6ff8a6b",
    measurementId: "G-CVRRPCBJ35"
  };
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;