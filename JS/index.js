import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

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
const auth = getAuth(app);

async function loginUser() {
    console.log("Working!");
        let emailaddress =loginname.value
        let userpassword = loginpassword.value
        try {
            let userCredential = await signInWithEmailAndPassword(auth,emailaddress,userpassword);
            if (userCredential) {
                window.location.href = "http://127.0.0.1:5500/landingPage.html"

            }
        } catch (error) {
            
        }
    }


     btn.addEventListener('click',loginUser)

