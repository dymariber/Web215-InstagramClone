import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB-sgdsmQWCAz4MIp5Ns8yM_o1yeY9uwCo",
  authDomain: "instagram-clone-b86bc.firebaseapp.com",
  projectId: "instagram-clone-b86bc",
  storageBucket: "instagram-clone-b86bc.appspot.com",
  messagingSenderId: "523543232509",
  appId: "1:523543232509:web:1e917b3266863144baa394",
  measurementId: "G-QJ5306WSCZ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};
