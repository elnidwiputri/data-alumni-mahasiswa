// js/auth_admin.js
import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("formAdmin");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const nama = document.getElementById("nama").value.trim();

  if (!email || !nama) return alert("Isi email dan nama admin.");

  try {
    console.log("Mengecek login admin:", email, nama);
    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      where("nama", "==", nama)
    );
    const snap = await getDocs(q);

    if (snap.empty) {
      return alert("Email atau nama admin salah.");
    }

    const data = snap.docs[0].data();
    const session = { role: "admin", email: data.email, nama: data.nama };
    sessionStorage.setItem("user", JSON.stringify(session));

    window.location.href = "admin-dashboard.html";
  } catch (err) {
    console.error("Error login admin:", err);
    alert("Terjadi kesalahan, coba lagi.");
  }
});
