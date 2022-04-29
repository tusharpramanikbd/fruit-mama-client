// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLko18cbrCLemRVtiQqxIAGIR726CEzPk',
  authDomain: 'fruit-mama-client.firebaseapp.com',
  projectId: 'fruit-mama-client',
  storageBucket: 'fruit-mama-client.appspot.com',
  messagingSenderId: '208722117328',
  appId: '1:208722117328:web:5d513777d0bfabefc794d5',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export default auth
