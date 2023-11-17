import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjNDGDvYEEaK7kNIAIZEPtMHHcuA3ZrCw",
  authDomain: "financely-reactapp.firebaseapp.com",
  projectId: "financely-reactapp",
  storageBucket: "financely-reactapp.appspot.com",
  messagingSenderId: "781771093530",
  appId: "1:781771093530:web:7998fa441c9221185c03a3",
  measurementId: "G-9W1GPLCYFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
