import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("formTambah");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Ambil semua data dari form
  const data = Object.fromEntries(new FormData(form).entries());
  console.log("Data yang dikirim:", data); // cek di console

  try {
    // Simpan data ke Firestore collection "mahasiswa"
    await addDoc(collection(db, "mahasiswa"), data);
    alert("Data berhasil ditambahkan!");
    window.location.href = "admin-dashboard.html"; // redirect sesuai nama file
  } catch (err) {
    console.error("Gagal menambahkan data:", err);
    alert("Terjadi kesalahan: " + err.message);
  }
});
