import { db, storage } from "./firebase.js";
import { doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Ambil NIM dari URL
const url = new URL(window.location.href);
const nim = url.searchParams.get("nim");

if (!nim) {
  alert("NIM tidak ditemukan!");
  window.location.href = "admin-dashboard.html";
}

document.getElementById("nim").value = nim;

// Load data mahasiswa
async function loadData() {
  try {
    const refData = doc(db, "mahasiswa", nim);
    const snap = await getDoc(refData);

    if (!snap.exists()) {
      alert("Data tidak ditemukan!");
      window.location.href = "admin-dashboard.html";
      return;
    }

    const d = snap.data();

    document.getElementById("nama").value = d.nama || "";
    document.getElementById("tempat_lahir").value = d.tempat_lahir || "";
    document.getElementById("tanggal_lahir").value = d.tanggal_lahir || "";
    document.getElementById("jenis_kelamin").value = d.jenis_kelamin || "";
    document.getElementById("jurusan").value = d.jurusan || "";
    document.getElementById("email").value = d.email || "";
    document.getElementById("alamat").value = d.alamat || "";
    document.getElementById("no_hp").value = d.no_hp || "";
    document.getElementById("tahun_keluar").value = d.tahun_keluar || "";
    document.getElementById("judul_skripsi").value = d.judul_skripsi || "";
    document.getElementById("penguji_skripsi").value = d.penguji_skripsi || "";
    document.getElementById("pekerjaan").value = d.pekerjaan || "";

  } catch (e) {
    console.error("Gagal memuat data:", e);
    alert("Gagal memuat data mahasiswa!");
  }
}

loadData();

// Simpan perubahan
document.getElementById("editForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const dataUpdate = {
    nama: document.getElementById("nama").value,
    tempat_lahir: document.getElementById("tempat_lahir").value,
    tanggal_lahir: document.getElementById("tanggal_lahir").value,
    jenis_kelamin: document.getElementById("jenis_kelamin").value,
    jurusan: document.getElementById("jurusan").value,
    email: document.getElementById("email").value,
    alamat: document.getElementById("alamat").value,
    no_hp: document.getElementById("no_hp").value,
    tahun_keluar: document.getElementById("tahun_keluar").value,
    judul_skripsi: document.getElementById("judul_skripsi").value,
    penguji_skripsi: document.getElementById("penguji_skripsi").value,
    pekerjaan: document.getElementById("pekerjaan").value,
  };

  // Upload file skripsi jika ada
  const skripsi = document.getElementById("file_skripsi").files[0];
  if (skripsi) {
    try {
      const pdfRef = ref(storage, "skripsi/" + nim);
      await uploadBytes(pdfRef, skripsi);
      const urlPDF = await getDownloadURL(pdfRef);
      dataUpdate.file_skripsi = urlPDF; // tambahkan field file_skripsi kembali jika diupload
    } catch (err) {
      console.error("Gagal upload skripsi:", err);
      alert("Gagal upload file skripsi!");
      return;
    }
  }

  try {
    const refData = doc(db, "mahasiswa", nim);
    await updateDoc(refData, dataUpdate);
    alert("Perubahan berhasil disimpan!");
    window.location.href = "admin-dashboard.html";
  } catch (e) {
    console.error("Gagal menyimpan perubahan:", e);
    alert("Gagal menyimpan perubahan!");
  }
});
