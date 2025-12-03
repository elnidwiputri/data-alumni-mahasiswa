import { db } from "./firebase.js";
import { collection, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("search");

let mahasiswaList = [];

// Realtime listener untuk Firestore → otomatis update saat ada perubahan
const colRef = collection(db, "mahasiswa");
onSnapshot(colRef, (snapshot) => {
  mahasiswaList = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  display(mahasiswaList);
});

// Fungsi tampilkan data di tabel
function display(list) {
  tableBody.innerHTML = "";
  list.forEach(m => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${m.nim || ""}</td>
      <td>${m.nama || ""}</td>
      <td>${m.tempat_lahir || ""}</td>
      <td>${m.tanggal_lahir || ""}</td>
      <td>${m.jenis_kelamin || ""}</td>
      <td>${m.jurusan || ""}</td>
      <td>${m.email || ""}</td>
      <td>${m.alamat || ""}</td>
      <td>${m.no_hp || ""}</td>
      <td>${m.tahun_keluar || ""}</td>
      <td>${m.judul_skripsi || ""}</td>
      <td>${m.penguji_skripsi || ""}</td>
      <td>${m.pekerjaan || ""}</td>
      <td>
        <button onclick="edit('${m.id}')">Edit</button>
        <button onclick="hapus('${m.id}')">Hapus</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Fungsi Edit → redirect ke halaman edit
window.edit = (id) => {
  window.location.href = `edit_mahasiswa.html?id=${id}`;
}

// Fungsi Hapus
window.hapus = async (id) => {
  if (!confirm("Yakin ingin menghapus data ini?")) return;
  await deleteDoc(doc(db, "mahasiswa", id));
  alert("Data berhasil dihapus!");
}

// Fitur search (nim, nama, jurusan)
searchInput.addEventListener("input", () => {
  const key = searchInput.value.toLowerCase();
  display(mahasiswaList.filter(m =>
    (m.nim && m.nim.toLowerCase().includes(key)) ||
    (m.nama && m.nama.toLowerCase().includes(key)) ||
    (m.jurusan && m.jurusan.toLowerCase().includes(key))
  ));
});
