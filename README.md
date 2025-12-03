```markdown
# Sistem Data Alumni Fakultas Sains dan Teknologi

## Informasi Kelompok

**Nama Kelompok:** Kelompok 3

**Anggota Tim:**
- Elni Dwi Putri (701230196)
- Zalma Nabila Putri (701230194)
- Hayatun Nufus (701230096)

**Program Studi:** Sistem Informasi  
**Fakultas:** Sains dan Teknologi  
**Universitas:** Universitas Islam Negeri Sultan Thaha Saifuddin Jambi

---

## Deskripsi Singkat Aplikasi

Sistem Data Alumni Fakultas Sains dan Teknologi adalah platform digital berbasis web untuk mengelola dan menyimpan informasi alumni secara terstruktur. Sistem ini memudahkan pencatatan data pribadi dan kontak alumni dengan aman dan efisien, sekaligus menjadi sarana komunikasi dan jejaring antara alumni, mahasiswa, dan pihak fakultas.

---

## Tujuan Sistem / Permasalahan yang Diselesaikan

### Permasalahan:
- Kesulitan dalam mengelola data alumni secara terstruktur dan terpusat
- Tidak adanya sistem yang memudahkan pencarian informasi alumni
- Proses pendataan alumni yang masih manual dan tidak efisien

### Solusi:
Membangun sistem pengelolaan data alumni yang:
- Aman dan terstruktur
- Mudah diakses oleh admin dan mahasiswa
- Mendukung pencarian alumni berdasarkan nama, jurusan, dan pekerjaan
- Mendukung kebutuhan administrasi dan jejaring fakultas

---

## Teknologi yang Digunakan

### Frontend:
- `HTML5` - Struktur halaman web
- `CSS3` - Styling dan desain tampilan
- `TailwindCSS` - Framework CSS untuk styling modern
- `JavaScript (ES6+)` - Logika aplikasi di sisi client

### Backend:
- `Firebase Authentication` - Sistem autentikasi user
- `Firebase Firestore` - Database NoSQL real-time

### Tools & Platform:
- `Git & GitHub` - Version control dan repository
- `Firebase Hosting` - Platform deployment

---

## Fitur Utama

### Admin:
- Login menggunakan `email` dan `password`
- Menambahkan data mahasiswa/alumni
- Mengedit data mahasiswa/alumni
- Menghapus data mahasiswa/alumni
- Melihat statistik alumni
- Mencari data berdasarkan `NIM`, `nama`, atau `email`
- Membuat akun login untuk mahasiswa

### Mahasiswa:
- Login menggunakan `NIM` dan `password`
- Melihat profil pribadi (read-only)
- Mengakses informasi data diri secara lengkap

---

## Cara Menjalankan Aplikasi

### Prasyarat:
- Browser modern (`Chrome`, `Firefox`, `Edge`, `Safari`)
- Koneksi internet (untuk akses Firebase)
- Text editor (`VS Code`, `Sublime`, dll.) untuk development

### Instalasi & Konfigurasi:

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/sistem-data-alumni.git
   cd sistem-data-alumni
   ```

2. **Konfigurasi Firebase**
   - Buka file `js/firebase.js`
   - Pastikan konfigurasi Firebase sudah benar:
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

3. **Menjalankan Aplikasi**
   - Buka file `index.html` di browser, atau
   - Gunakan Live Server di VS Code
   - Atau jalankan local server:
     ```bash
     python -m http.server 8000
     ```
   - Akses melalui `http://localhost:8000`

---

## Akun Demo

### Admin:
- **Email:** `admin@gmail.com`
- **Password:** `admin`

### Mahasiswa (Contoh):
- **NIM:** `701230196`
- **Password:** `[701230196]`

---

## Struktur Project

```
data_mahasiswa/
│
├── index.html                    # Halaman pemilihan login
├── login-admin.html              # Halaman login admin
├── login-mahasiswa.html          # Halaman login mahasiswa
├── logout-admin.html             # Halaman konfirmasi logout
├── admin-dashboard.html          # Dashboard admin
├── mahasiswa-dashboard.html      # Dashboard mahasiswa
├── edit.html                     # Halaman edit data mahasiswa
│
├── css/
│   └── style.css                 # Custom styling
│
├── js/
│   ├── firebase.js               # Konfigurasi Firebase
│   ├── auth.admin.js             # Autentikasi admin
│   ├── auth.mahasiswa.js         # Autentikasi mahasiswa
│   ├── admin-dashboard.js        # Logic dashboard admin
│   ├── mahasiswa.js              # Logic dashboard mahasiswa
│   ├── tambah.js                 # Logic tambah data
│   └── edit.js                   # Logic edit data
│
└── uploads/                      # Folder file pendukung
```

---

## Link Penting

- **Link Deployment:** `https://project-name.web.app`
- **Link Repository:** `https://github.com/username/sistem-data-alumni`
- **Link Demo Video:** `https://youtu.be/xxx`

---

## Screenshot Aplikasi

### Halaman Login Admin
![Login Admin](screenshots/login-admin.png)

### Dashboard Admin
![Dashboard Admin](screenshots/dashboard-admin.png)

### Dashboard Mahasiswa
![Dashboard Mahasiswa](screenshots/dashboard-mahasiswa.png)

---

## Catatan Tambahan

### Keterbatasan Sistem:
- Sistem belum memiliki fitur `reset password`
- Fitur `export data ke Excel` belum diimplementasikan
- Sistem belum memiliki fitur `notifikasi email`

### Fitur yang Belum Selesai:
- Filter alumni berdasarkan `tahun kelulusan`
- Statistik grafik pada dashboard
- Backup data otomatis

### Petunjuk Khusus:
- Admin harus membuat akun login mahasiswa terlebih dahulu sebelum mahasiswa dapat login
- Data yang dihapus tidak dapat dikembalikan
- Pastikan koneksi internet stabil untuk akses database

---

## Pengembangan Selanjutnya

- Implementasi fitur pencarian lanjutan
- Penambahan export data ke format `Excel/PDF`
- Sistem notifikasi email untuk update data
- Integrasi dengan sistem akademik kampus
- Implementasi `role-based access control` yang lebih kompleks

---

## Lisensi & Hak Cipta

© 2025 Kelompok 3 - Program Studi Sistem Informasi  
Universitas Islam Negeri Sultan Thaha Saifuddin Jambi

---

## Keterangan Tugas

Project ini dibuat untuk memenuhi tugas **Final Project Mata Kuliah Rekayasa Perangkat Lunak**.

**Dosen Pengampu:** Dila Nurlaila, M.Kom  
**Tahun Ajaran:** 2024/2025

---

## Kontak & Dukungan

Jika ada pertanyaan atau kendala, silakan hubungi:
- Elni Dwi Putri: `elnidwiputri363@gmail.com`
- Zalma Nabila Putri: `zalma07@gmail.com`
- Hayatun Nufus: `hayatun@gmail.com`

---

**Terima kasih telah menggunakan Sistem Data Alumni Fakultas Sains dan Teknologi!** 🎓
```