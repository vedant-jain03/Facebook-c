// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB1So5wuLMaZeApbg32Jd85GaQl3EGRSLk",
    authDomain: "fb-clone-b3e47.firebaseapp.com",
    projectId: "fb-clone-b3e47",
    storageBucket: "fb-clone-b3e47.appspot.com",
    messagingSenderId: "662643925684",
    appId: "1:662643925684:web:bdfde8f0a208be876bade1",
    measurementId: "G-MFECV0CHCX"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;