// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACjFQQT8Q3PDEas_apEt15z32zO_b95Tk",
  authDomain: "react-notes-67116.firebaseapp.com",
  projectId: "react-notes-67116",
  storageBucket: "react-notes-67116.appspot.com",
  messagingSenderId: "506553107004",
  appId: "1:506553107004:web:881511bd717d1cb9f1b939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

// Reference to your collection
const notesCollection = collection(db, "notes");

// Export db and notesCollection
export { db, notesCollection };