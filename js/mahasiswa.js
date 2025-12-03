// js/mahasiswa.js
import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn?.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  window.location.href = "index.html";
});

const raw = sessionStorage.getItem("user");
if (!raw) { alert("Harap login terlebih dahulu"); window.location.href = "index.html"; }

const user = JSON.parse(raw);
if (user.role !== "mahasiswa") { alert("Akses halaman ini khusus mahasiswa"); window.location.href = "index.html"; }

const nim = user.nim || user.uid;
const namaTitle = document.getElementById("namaTitle");
const profilArea = document.getElementById("profilArea");

async function loadProfile() {
  const snap = await getDoc(doc(db, "mahasiswa", nim));
  if (!snap.exists()) {
    profilArea.innerHTML = "<p>Data tidak ditemukan.</p>";
    return;
  }
  const m = snap.data();
  namaTitle.innerText = m.nama || "Profil";

  profilArea.innerHTML = `
    <div class="profile-grid">
      <div class="profile-photo">${m.foto ? `<img src="${m.foto}" alt="foto" />` : `<div class="no-photo">No Photo</div>`}</div>
      <div class="profile-info">
        <p><b>NIM:</b> ${m.nim}</p>
        <p><b>Nama:</b> ${m.nama}</p>
        <p><b>Tempat, Tanggal Lahir:</b> ${m.tempat_lahir || '-'}, ${m.tanggal_lahir || '-'}</p>
        <p><b>Jenis Kelamin:</b> ${m.jenis_kelamin || '-'}</p>
        <p><b>Jurusan:</b> ${m.jurusan || '-'}</p>
        <p><b>Email:</b> ${m.email || '-'}</p>
        <p><b>Alamat:</b> ${m.alamat || '-'}</p>
        <p><b>No HP:</b> ${m.no_hp || '-'}</p>
        <p><b>Tahun Keluar:</b> ${m.tahun_keluar || '-'}</p>
        <p><b>Judul Skripsi:</b> ${m.judul_skripsi || '-'}</p>
        <p><b>Penguji Skripsi:</b> ${m.penguji_skripsi || '-'}</p>
        <p><b>Pekerjaan:</b> ${m.pekerjaan || '-'}</p>
        <p><b>File Skripsi:</b> ${m.file_skripsi ? `<a class="btn small" href="${m.file_skripsi}" target="_blank">Download PDF</a>` : '-'}</p>
      </div>
    </div>
  `;
}

loadProfile();
