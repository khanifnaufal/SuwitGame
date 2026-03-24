# Batu Gunting Kertas - React Application

Aplikasi web modern untuk bermain permainan Batu Gunting Kertas (Rock Paper Scissors) dengan antarmuka yang interaktif, animasi menarik, dan sistem skor terintegrasi.

## 🎮 Fitur Utama

- **UI/UX Modern**: Desain yang menarik dengan kartu pilihan yang responsif
- **Visual Menarik**: Icon dan emoji untuk representasi Batu, Kertas, dan Gunting
- **Animasi Interaktif**:
  - Animasi shake (goyangan tangan) saat proses pemilihan
  - Transisi halus untuk hasil permainan
  - Efek visual yang engaging
- **Scoreboard**: Melacak kemenangan user, komputer, dan seri
- **Responsive Design**: Bekerja sempurna di desktop, tablet, dan mobile
- **Modern Styling**: Menggunakan Tailwind CSS untuk styling yang rapi

## 🛠️ Instalasi dan Setup

### Prerequisites
- Node.js (versi 16 atau lebih)
- npm atau yarn

### Langkah-langkah Instalasi

1. **Clone atau Download Project**
   ```bash
   cd "Your Folder/Folder"
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

   Aplikasi akan terbuka di browser pada `http://localhost:5173`

4. **Build untuk Production**
   ```bash
   npm run build
   ```

## 📁 Struktur Direktori

```
SuWin/
├── src/
│   ├── components/
│   │   ├── GameCard.jsx         # Komponen kartu pilihan
│   │   ├── Scoreboard.jsx       # Komponen papan skor
│   │   └── ResultDisplay.jsx    # Komponen tampilan hasil
│   ├── App.jsx                  # Komponen utama aplikasi
│   ├── main.jsx                 # Entry point React
│   └── index.css                # Styling dengan Tailwind
├── index.html                   # Template HTML
├── package.json                 # Dependencies
├── tailwind.config.js           # Konfigurasi Tailwind CSS
├── postcss.config.js            # Konfigurasi PostCSS
├── vite.config.js               # Konfigurasi Vite
└── app.py                       # File Python original (legacy)
```

## 🎯 Cara Bermain

1. Klik salah satu pilihan: **Batu**, **Kertas**, atau **Gunting**
2. Tunggu animasi shake untuk effect ketegangan ✨
3. Lihat hasil permainan - apakah Anda menang, kalah, atau seri 🎲
4. Skor otomatis terupdate di scoreboard
5. Klik **"Main Lagi"** untuk putaran berikutnya
6. Gunakan **"Reset Skor"** untuk mengembalikan skor ke 0

## 📊 Logika Permainan

Logika yang sama persis dengan versi Python original:
- **Batu** mengalahkan Gunting
- **Kertas** mengalahkan Batu
- **Gunting** mengalahkan Kertas
- Jika pilihan sama = **Seri**

## 🎨 Teknologi yang Digunakan

- **React 18**: Library UI utama
- **Vite**: Build tool yang super cepat
- **Tailwind CSS**: Framework CSS utility-first
- **React Icons**: Icon library untuk tampilan profesional
- **Framer Motion**: (Optional) Untuk animasi advanced

## 🚀 Performa

- Loading time sangat cepat berkat Vite
- Animasi yang smooth dengan CSS native
- Bundle size yang minimal
- Tidak ada dependency yang berat

## 📝 Catatan

- Aplikasi ini sepenuhnya client-side, tidak perlu backend
- Semua state disimpan di browser
- Data hilang ketika refresh halaman (bisa ditambah localStorage jika diperlukan)

## 🔄 Konversi dari Python

Logika game telah dikonversi dari `app.py` Python ke React dengan fitur tambahan:
- Dari terminal-based ke web-based UI
- Dari sequential flow ke state-based management
- Ditambah visual feedback dan animasi
- Scoreboard terintegrasi

## 📞 Dukungan

Untuk masalah atau pertanyaan, silakan cek:
- Konfigurasi Node.js dan npm
- Pastikan port 5173 tidak digunakan aplikasi lain
- Clear browser cache jika ada masalah loading

---

**Selamat bermain! 🎮**
