// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvcW5e0tzQqLuzQ4i4vff2D0Jkc09CMd8",
  authDomain: "data-alumni-b0381.firebaseapp.com",
  projectId: "data-alumni-b0381",
  storageBucket: "data-alumni-b0381.appspot.com",
  messagingSenderId: "852905518914",
  appId: "1:852905518914:web:71e503f91340991c3d4adb",
  measurementId: "G-Z8ZLBZDZKY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };