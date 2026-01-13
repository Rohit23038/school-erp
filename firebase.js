import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwmNbrIILP9fNNSzAxPuE",
  authDomain: "schoolerp-cb790.firebaseapp.com",
  projectId: "schoolerp-cb790",
  storageBucket: "schoolerp-cb790.appspot.com",
  messagingSenderId: "1098794553484",
  appId: "1:1098794553484:web:b8d2abe9b8298ffa7d2ba9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
