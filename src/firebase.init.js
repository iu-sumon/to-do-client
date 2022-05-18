import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyA4aIunQAamcuGBWTS6pwhUDCtFmTX7j5I",
    authDomain: "to-do-app-c4c5b.firebaseapp.com",
    projectId: "to-do-app-c4c5b",
    storageBucket: "to-do-app-c4c5b.appspot.com",
    messagingSenderId: "472618290568",
    appId: "1:472618290568:web:cd6129f4fb4ecf4736be3d"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;