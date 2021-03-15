import * as firebase from 'firebase';
import 'firebase/firebase-firestore';
var firebaseConfig = {
    apiKey: "AIzaSyD58BKDVUmb924wNYouieBNTVTclgRU4fc",
    authDomain: "spotter-316b3.firebaseapp.com",
    projectId: "spotter-316b3",
    storageBucket: "spotter-316b3.appspot.com",
    messagingSenderId: "837097905945",
    appId: "1:837097905945:web:2ad5a83e86121ad216af88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();

  export default firestore;