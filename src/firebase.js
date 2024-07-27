import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjpC64Jp6lRW0T0Nl1P6WPxdGSzSu_D_g",
    authDomain: "clone-81342.firebaseapp.com",
    projectId: "clone-81342",
    storageBucket: "clone-81342.appspot.com",
    messagingSenderId: "683024559262",
    appId: "1:683024559262:web:9d553ad51bf83e5fcd9f8f",
    measurementId: "G-CTQP194HQQ"
  };

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };