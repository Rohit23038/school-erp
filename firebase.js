// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAw6mNbrIILP9fNNSzAXuPEUsN7x3T0dsY",
  authDomain: "schoolerp-cb790.firebaseapp.com",
  projectId: "schoolerp-cb790",
  storageBucket: "schoolerp-cb790.appspot.com",
  messagingSenderId: "1098794553484",
  appId: "1:1098794553484:web:b8d2abe9b829f8fa7d2ba9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
