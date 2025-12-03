// js/auth_mahasiswa.js
import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("formMhs");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const nim = document.getElementById("nim").value.trim();

  if (!username || !nim) return alert("Isi username dan NIM.");

  try {
    const q = query(collection(db, "login_mahasiswa"), where("username", "==", username), where("password", "==", nim));
    const snap = await getDocs(q);

    if (snap.empty) {
      return alert("Username atau NIM salah.");
    }

    const rec = snap.docs[0].data();
    // session user
    const session = { role: "mahasiswa", username: rec.username, nim: rec.nim, uid: rec.uid || rec.nim };
    sessionStorage.setItem("user", JSON.stringify(session));

    window.location.href = "mahasiswa-dashboard.html";
  } catch (err) {
    console.error(err);
    alert("Terjadi kesalahan, coba lagi.");
  }
});
