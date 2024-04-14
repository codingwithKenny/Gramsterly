import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const db = getFirestore(app)
const colRef = collection(db,"eachUserPost")


async function addEachUserPost(){
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const answer = await res.json()
        console.log(answer)

        let resp= await addDoc(colRef, answer[0])
        console.log(resp)
                } catch (error) {
        console.log(error)
    }
    // let userName = username.value
    // let caption = usercaption.value
    // let postDate = postdate.value
    // let personalPost = {
    //     userName,
    //     caption,
    //     postDate
    // }
   
    // console.log(res)
}
button.addEventListener('click', addEachUserPost)
