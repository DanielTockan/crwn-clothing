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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase