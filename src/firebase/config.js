import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDzbGkieGF7vz4XamiSLoE9xjNvRyeskH4",
    authDomain: "mymoney-1c432.firebaseapp.com",
    projectId: "mymoney-1c432",
    storageBucket: "mymoney-1c432.appspot.com",
    messagingSenderId: "417449846542",
    appId: "1:417449846542:web:f88d352e1386ca3a4a995f"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }