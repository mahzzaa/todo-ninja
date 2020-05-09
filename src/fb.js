import * as firebase from 'firebase';
import 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQRTkhm9eQPY2FLTTwTSpUE8nqjtcvdG4",
    authDomain: "todo-ninja-68de0.firebaseapp.com",
    databaseURL: "https://todo-ninja-68de0.firebaseio.com",
    projectId: "todo-ninja-68de0",
    storageBucket: "todo-ninja-68de0.appspot.com",
    messagingSenderId: "299067093591",
    appId: "1:299067093591:web:17539fe075b9d6c903e912",
    measurementId: "G-72K59XP30X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true});
  export default db;