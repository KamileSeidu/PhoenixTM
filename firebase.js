// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1rOgsBpXvvw06wLoCvdkSgdZb6nqf-cw",
  authDomain: "bossit-13595.firebaseapp.com",
  projectId: "bossit-13595",
  storageBucket: "bossit-13595.appspot.com",
  messagingSenderId: "698482278213",
  appId: "1:698482278213:web:61a72d0c00d0e4cbfc882c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };