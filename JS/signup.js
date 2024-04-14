
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore,collection,addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkAkDKd9nJWiArUySOO0Py93w8-2ziVPg",
  authDomain: "gramster-b0506.firebaseapp.com",
  projectId: "gramster-b0506",
  storageBucket: "gramster-b0506.appspot.com",
  messagingSenderId: "823188809037",
  appId: "1:823188809037:web:42938901167bc2a48f4304",
  measurementId: "G-RXZ1JV23QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()
const colRef = collection(db, 'User')
async function addUser() {
    let firstName = document.getElementById('firstname').value
    let secondName = document.getElementById('secondname').value
    let emailAddress = document.getElementById('emailaddress').value
    let passWord = document.getElementById('loginpassword').value

    let userData = {
        firstName,
        secondName,
        emailAddress,
        
    }
     try {
        console.log(userData)
        
        let res = await addDoc(colRef,userData)

        let userLogIn = await createUserWithEmailAndPassword(auth,emailAddress,passWord)
        if (userLogIn) {
            window.location.href ='http://127.0.0.1:5500/landingPage.html'
            
        }

       
        
     } catch (error) {
        // alert('PLEASE FILL THE FORM')
     }
}
const btn = document.getElementById('btn')
btn.addEventListener('click',addUser)
