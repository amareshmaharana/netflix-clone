import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_AUTHENTICATION_API_KEY,
  authDomain: "netflix-clone-bcba2.firebaseapp.com",
  projectId: "netflix-clone-bcba2",
  storageBucket: "netflix-clone-bcba2.firebasestorage.app",
  messagingSenderId: "735558838094",
  appId: "1:735558838094:web:c22e1c924010f4c056601f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

/* --------- LOGIN AUTH --------- */
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

/* ----------- LOGOUT ----------- */
const logout = async () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
