import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {

    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut

} from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyDcgJQgENVnobTcKLA339_7X-Ydlmq-VxA",
  authDomain: "encoded-phalanx-486310-p6.firebaseapp.com",
  projectId: "encoded-phalanx-486310-p6",
  storageBucket: "encoded-phalanx-486310-p6.firebasestorage.app",
  messagingSenderId: "245862233082",
  appId: "1:245862233082:web:15bc23e65b13b3117a2a43",
  measurementId: "G-1S23VLBGNN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

window.registerUser = async function () {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        const userCredential =
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        document.getElementById("message")
        .innerHTML =
        "Registration Successful";

        console.log(userCredential.user);

    } catch(error) {

        document.getElementById("message")
        .innerHTML =
        error.message;
    }
}

window.loginUser = async function () {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        document.getElementById("message")
        .innerHTML =
        "Login Successful";

        console.log(userCredential.user);

    } catch(error) {

        document.getElementById("message")
        .innerHTML =
        error.message;
    }
}

window.logoutUser = async function () {

    try {

        await signOut(auth);

        document.getElementById("message")
        .innerHTML =
        "Logout Successful";

    } catch(error) {

        document.getElementById("message")
        .innerHTML =
        error.message;
    }
}