import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDRsUFZnQtqrxeM49KKs0vSTpcK0nxf5yk",
    authDomain: "react-todo-93432.firebaseapp.com",
    databaseURL: "https://react-todo-93432.firebaseio.com",
    projectId: "react-todo-93432",
    storageBucket: "react-todo-93432.appspot.com",
    messagingSenderId: "567577250391",
    appId: "1:567577250391:web:09d46dcff13447c1a3b112"
  };

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(config);
  
var db = firebase.firestore();

export { db };