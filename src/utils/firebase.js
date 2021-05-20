import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDjGbIIF0GswHW8boDdZcxjrqsnc7IrJoo",
    authDomain: "todo-list-7551f.firebaseapp.com",
    projectId: "todo-list-7551f",
    storageBucket: "todo-list-7551f.appspot.com",
    messagingSenderId: "604258737811",
    appId: "1:604258737811:web:4b3842da81edce0959f766",
    measurementId: "G-XRS4E86MQV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;