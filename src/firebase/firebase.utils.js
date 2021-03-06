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

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return; //If its empty then return nothing or exit
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshots = await userRef.get();
  // This snapshots bring user data from firebase store;
  console.log(snapshots.data());
  if(!snapshots.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log("Your user request " + error.message);
    }
  }
  return snapshots;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
