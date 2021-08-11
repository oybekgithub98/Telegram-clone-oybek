import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyCkLGfRhe-j1_117_ax_z5mhHNcJVVgCLA",
  authDomain: "telegramchat-5712b.firebaseapp.com",
  projectId: "telegramchat-5712b",
  storageBucket: "telegramchat-5712b.appspot.com",
  messagingSenderId: "1018928398694",
  appId: "1:1018928398694:web:63c531b776ff07819188a7",
  measurementId: "G-8EEWJNFY0Y"
});

const auth = app.auth();
const db = app.firestore();
export {auth, db};
export default app;