import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCIyxPDxrNfVHLAumNgULfsPSmJm1PQxxM",
  authDomain: "crwn-clothing-2fa0a.firebaseapp.com",
  projectId: "crwn-clothing-2fa0a",
  storageBucket: "crwn-clothing-2fa0a.appspot.com",
  messagingSenderId: "936762810267",
  appId: "1:936762810267:web:253c4e1f6fdb750b26cb3e",
  measurementId: "G-EW9D7LS31Q"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase