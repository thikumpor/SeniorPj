import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
 
  apiKey: "AIzaSyAiUOWkz1hOl8fV_KJsgzz8KcKAbG7MT6U",
  authDomain: "testsenior-62315.firebaseapp.com",
  projectId: "testsenior-62315",
  storageBucket: "testsenior-62315.appspot.com",
  messagingSenderId: "918791972920",
  appId: "1:918791972920:web:bf92f91ff07e041b845ecd"
      });
      
var db = firebaseApp.firestore();

export {db};