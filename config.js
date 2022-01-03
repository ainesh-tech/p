import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDWAdq4IU4su_yOD72Cf_dyoUp8IftFlvA",
  authDomain: "pro75-84f5d.firebaseapp.com",
  projectId: "pro75-84f5d",
  storageBucket: "pro75-84f5d.appspot.com",
  messagingSenderId: "858109723328",
  appId: "1:858109723328:web:9ae625b402b50cd5f6a325"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
