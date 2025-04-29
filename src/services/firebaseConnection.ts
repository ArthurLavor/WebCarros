
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJUf3mIl7RiCgcDoYBsCouczfKAZIG0wM",
  authDomain: "webcarros-c4a09.firebaseapp.com",
  projectId: "webcarros-c4a09",
  storageBucket: "webcarros-c4a09.firebasestorage.app",
  messagingSenderId: "370984703482",
  appId: "1:370984703482:web:269f695bb0ab3450ad8043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage};