import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDKvZy0vXrm-VliMduSGuGEdM6ApRhuhEs",
  authDomain: "vue-firebase-fc4a9.firebaseapp.com",
  projectId: "vue-firebase-fc4a9",
  storageBucket: "vue-firebase-fc4a9.appspot.com",
  messagingSenderId: "195462799808",
  appId: "1:195462799808:web:37575f8d4c8010d767a825"
};

// init firebase

firebase.initializeApp(firebaseConfig)

// init firestore service

const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }