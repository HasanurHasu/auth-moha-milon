// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgQ20KAE5jSu5hOmu1VDxDowCDKT_sRFU",
  authDomain: "auth-moha-milon-5bd87.firebaseapp.com",
  projectId: "auth-moha-milon-5bd87",
  storageBucket: "auth-moha-milon-5bd87.appspot.com",
  messagingSenderId: "1017131582490",
  appId: "1:1017131582490:web:51dfb9b74eaca5559b7da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;