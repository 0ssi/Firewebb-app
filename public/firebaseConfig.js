import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8yri3q6Oi9AYOnj6dnbdlAVV7S6JUzV4",
  authDomain: "webapp-57c8c.firebaseapp.com",
  projectId: "webapp-57c8c",
  storageBucket: "webapp-57c8c.appspot.com",
  messagingSenderId: "1025095764718",
  appId: "1:1025095764718:web:3ce6bd943fe576d7f5c1ff",
  measurementId: "G-XMY9GNX8VP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

// html elements
const loginForm = document.getElementById('loginForm')
// lots of code
loginForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
  .then((cred)=>{
    return cred.user.getIdToken()
  }).then((token)=>{
    document.cookie = `Bearer ${token}`
    window.location.href = '/profile'
  }) 
  .catch((err)=>{
    if(err)throw err
  })
  
})



