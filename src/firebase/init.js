// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqCksKajAsXX5sbl9bYK8fy9lGlcGJFqk',
  authDomain: 'week7-huaaoli.firebaseapp.com',
  projectId: 'week7-huaaoli',
  storageBucket: 'week7-huaaoli.appspot.com',
  messagingSenderId: '45342469851',
  appId: '1:45342469851:web:9dc2834b746fc8ff3226fe'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
