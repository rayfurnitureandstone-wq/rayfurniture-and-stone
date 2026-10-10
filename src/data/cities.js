// Data kota JABODETABEK + wilayah sekitar untuk halaman lokasi (SEO long-tail lokal).
// Dipakai src/pages/kitchen-set/index.astro, src/pages/kitchen-set/[city].astro,
// src/pages/top-table/[city].astro, dan src/pages/top-table.astro
//
// PENTING (SEO): tiap kota punya `unik` — paragraf yang benar-benar berbeda,
// supaya halaman tidak dianggap duplikat oleh Google. `slug` dipakai di URL.

export const kitchenCities = [
  // ── DKI JAKARTA ─────────────────────────────────────────────
  { slug: 'jakarta-timur', nama: 'Jakarta Timur', group: 'DKI Jakarta',
    landmark: 'Cakung, Pondok Kelapa, Cijantung, Kalimalang, Kramat Jati, Pulogadung',
    ongkir: 'ongkir gratis & survei cepat', effort: 'sangat dekat dari Cibubur — bisa survei hari yang sama',
    catatan: 'Jakarta Timur paling dekat dengan workshop kami di Cibubur.',
    unik: 'Jakarta Timur banyak dihuni keluarga muda di klaster seperti Pondok Kelapa dan Cibubur Indah. Dapur di rumah tipe 60–90 biasanya berbentuk L atau U sempit, jadi kami sering merancang kitchen set dengan laci tarik penuh dan rak sudut supaya ruang mati bisa dipakai. Karena dapur di JakTim sering menghadap area servis yang panas, material HPL tahan panas jadi andalan.' },

  { slug: 'jakarta-selatan', nama: 'Jakarta Selatan', group: 'DKI Jakarta',
    landmark: 'Kebayoran, Cilandak, Pasar Minggu, Tebak, Jagakarsa, Mampang',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 30–45 menit dari workshop',
    catatan: 'Banyak apartemen dan rumah baru di Jaksel memilih kitchen set custom karena ukuran ruang terbatas.',
    unik: 'Di Jakarta Selatan, sekitar separuh pesanan kami datang dari apartemen dan rumah cluster dengan dapur mungil di bawah 3 meter. Untuk ruang sekecil itu, kitchen set custom jauh lebih hemat tempat dibanding kabinet ready stock — setiap sentimeter dihitung. Kami juga sering memadukan top table granit tipis 2 cm dengan kabinet gantung sampai plafon agar kesan ruang lebih tinggi.' },

  { slug: 'jakarta-pusat', nama: 'Jakarta Pusat', group: 'DKI Jakarta',
    landmark: 'Menteng, Tanah Abang, Kemayoran, Cempaka Putih, Johar Baru',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'survei dijadwalkan pagi untuk menghindari macet',
    catatan: 'Untuk Jakpus kami sarankan survei pagi agar pengukuran bisa selesai di hari yang sama.',
    unik: 'Jakarta Pusat banyak rumah lama dan ruko yang direnovasi menjadi hunian. Tantangan utamanya dinding tua yang tidak selalu lurus, sehingga kitchen set custom lebih aman daripada kabinet pabrikan — modul bisa dibuat menyusul kondisi dinding. Untuk ruko, kami sering membuat kitchen set plus meja island yang sekaligus jadi pembatas area makan.' },

  { slug: 'jakarta-barat', nama: 'Jakarta Barat', group: 'DKI Jakarta',
    landmark: 'Kebon Jeruk, Cengkareng, Grogol, Kembangan, Meruya, Taman Sari',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 45–60 menit dari workshop',
    catatan: 'Jakarta Barat banyak rumah dua lantai; kami sering membuat kitchen set + island menyesuaikan ruang.',
    unik: 'Jakarta Barat banyak rumah dua lantai di kawasan Kembangan dan Meruya. Dapur di lantai bawah biasanya menyatu dengan ruang makan, jadi desainnya mengarah ke kitchen set terbuka dengan island dan top table granit. Untuk pelanggan di JakBar kami sarankan survei pagi, karena perjalanan dari Cibubur bisa memakan waktu saat jam sibuk.' },

  { slug: 'jakarta-utara', nama: 'Jakarta Utara', group: 'DKI Jakarta',
    landmark: 'Kelapa Gading, Penjaringan, Pluit, Sunter, Tanjung Priok, Cilincing',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'survei dijadwalkan sesuai kondisi lalu lintas',
    catatan: 'Dapur di Jakut dekat pesisir cenderung lembap — kitchen set aluminium sering jadi pilihan.',
    unik: 'Jakarta Utara punya kelembapan udara yang lebih tinggi karena dekat pesisir. Di area seperti Penjaringan dan Pluit, kabinet kayu lebih cepat mengembang dan berjamur, sehingga banyak pelanggan memilih kitchen set rangka aluminium yang anti rayap dan tahan air. Top table granit atau quadra kami rekomendasikan karena tidak menyerap kelembapan seperti marmer.' },

  // ── BOGOR RAYA ──────────────────────────────────────────────
  { slug: 'bogor', nama: 'Bogor', group: 'Bogor Raya',
    landmark: 'Cibubur, Gunung Putri, Cileungsi, Cibinong, Sentul, Puncak, Dramaga, Parung',
    ongkir: 'gratis ongkir & survei', effort: 'wilayah inti kami — workshop & showroom di Cibubur',
    catatan: 'Bogor adalah markas kami: workshop dan showroom di Cibubur, jadi pengerjaan paling cepat.',
    unik: 'Bogor adalah markas kami sejak 2010. Workshop dan showroom di Cibubur (Jl. Transyogi No.60) bisa Anda kunjungi langsung untuk melihat contoh finishing sebelum memesan. Karena jaraknya dekat, survei di Bogor sering bisa dijadwalkan hari yang sama dengan konsultasi, dan proses produksi sampai pemasangan relatif paling cepat dibanding wilayah lain.' },

  { slug: 'kabupaten-bogor', nama: 'Kabupaten Bogor', group: 'Bogor Raya',
    landmark: 'Cibinong, Cileungsi, Gunung Putri, Jonggol, Citeureup, Parung Panjang',
    ongkir: 'gratis ongkir & survei', effort: 'dekat dari workshop, survei bisa cepat',
    catatan: 'Kabupaten Bogor menjadi wilayah dengan jumlah pemasangan kitchen set terbanyak kami.',
    unik: 'Kabupaten Bogor adalah wilayah dengan pemasangan kitchen set terbanyak kami. Banyak rumah baru di Cibinong dan Cileungsi dibeli dalam kondisi dapur kosong, sehingga pemilik memesan kitchen set sekaligus dari nol — termasuk top table dan backsplash. Karena jarak dekat, produksi dan pemasangan biasanya lebih cepat dan lebih hemat biaya kirim.' },

  { slug: 'kota-bogor', nama: 'Kota Bogor', group: 'Bogor Raya',
    landmark: 'Bogor Tengah, Bogor Barat, Bogor Utara, Tanah Sareal, Bogor Selatan',
    ongkir: 'gratis ongkir & survei', effort: 'sekitar 45 menit dari Cibubur',
    catatan: 'Kota Bogor sering minta kitchen set bermotif kayu klasik yang dipadukan top table granit.',
    unik: 'Kota Bogor cenderung memilih gaya klasik. Banyak pelanggan di Tanah Sareal dan Bogor Tengah meminta motif kayu hangat dengan sentuhan top table granit yang memberi kesan kokoh. Suhu Bogor yang sejuk membuat dapur nyaman untuk pemakaian lama, sehingga layout ergonomis (segitiga kerja kompor–sink–kulkas) menjadi perhatian utama saat desain.' },

  { slug: 'cibubur', nama: 'Cibubur', group: 'Bogor Raya',
    landmark: 'Cibubur, Nagrak, Ciangsana, Kranggan, Transyogi, Jatikarya',
    ongkir: 'ongkir gratis, survei bisa hari itu juga', effort: 'lokasi showroom kami — tinggal datang',
    catatan: 'Cibubur adalah lokasi workshop & showroom: Anda bisa langsung melihat contoh hasil sebelum memesan.',
    unik: 'Cibubur adalah lokasi workshop & showroom kami. Kalau Anda tinggal di Cibubur, Nagrak, atau Ciangsana, cukup datang ke Jl. Transyogi No.60 untuk melihat contoh kabinet, top table, dan finishing asli — bukan hanya foto. Pengukuran ke lokasi biasanya bisa dilakukan di hari yang sama, dan biaya kirim nol karena jaraknya hanya beberapa menit.' },

  { slug: 'sentul', nama: 'Sentul', group: 'Bogor Raya',
    landmark: 'Sentul City, Babakan Madang, Citeureup, Hambalang',
    ongkir: 'gratis ongkir & survei', effort: 'sekitar 30 menit dari Cibubur',
    catatan: 'Klaster-klaster baru di Sentul sering memesan kitchen set custom plus penyekat ruang.',
    unik: 'Sentul City banyak klaster baru dengan rumah bergaya modern tropis. Karena ruangan cenderung terbuka (open plan), pelanggan di Sentul sering memesan kitchen set custom plus penyekat ruang atau rak buku yang menyatu, supaya dapur tetap rapi terlihat dari ruang tamu. Top table quadra warna solid jadi favorit karena tampilannya bersih dan seragam.' },

  // ── DEPOK ───────────────────────────────────────────────────
  { slug: 'depok', nama: 'Depok', group: 'Depok',
    landmark: 'Cinere, Cimanggis, Margonda, Sawangan, Depok Timur, Beji, Limo',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'bersebelahan dengan Cibubur — survei cepat',
    catatan: 'Depok bersebelahan langsung dengan Cibubur, jadi survei sering bisa hari yang sama.',
    unik: 'Depok bersebelahan langsung dengan Cibubur, jadi ini salah satu wilayah tercepat kami. Banyak pelanggan di Cinere dan Cimanggis memesan kitchen set custom untuk mengganti kabinet lama yang sudah mengelupas. Karena jaraknya sangat dekat, survei, produksi, dan pemasangan sering berjalan dalam waktu singkat tanpa tambahan biaya kirim.' },

  // ── TANGERANG RAYA ──────────────────────────────────────────
  { slug: 'tangerang', nama: 'Tangerang', group: 'Tangerang Raya',
    landmark: 'Ciledug, Karawaci, Ciputat, Serpong, BSD, Alam Sutera, Parede',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 60–75 menit dari workshop',
    catatan: 'Untuk Tangerang kami sarankan jadwal survei pagi karena jarak dari workshop.',
    unik: 'Tangerang, terutama area Karawaci dan Alam Sutera, banyak dihuni keluarga dengan rumah modern minimalis. Dapur mereka sering dirancang menyatu dengan ruang makan, sehingga kitchen set custom dibuat dengan warna senada top table. Karena jarak dari Cibubur cukup jauh, kami sarankan survei pagi agar pengukuran selesai dalam sekali kunjungan.' },

  { slug: 'tangerang-selatan', nama: 'Tangerang Selatan', group: 'Tangerang Raya',
    landmark: 'BSD, Serpong, Ciputat, Pamulang, Pondok Aren, Setu',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 60 menit dari Cibubur',
    catatan: 'Tangsel banyak hunian baru; kitchen set dengan island dan top table quadra cukup populer.',
    unik: 'Tangerang Selatan (BSD, Serpong, Pamulang) adalah kawasan hunian baru yang tumbuh cepat. Karena banyak rumah diserahkan dalam kondisi dapur standar, pelanggan sering meng-upgrade dengan kitchen set custom plus island. Top table quadra warna solid cukup populer di sini karena cocok dengan gaya minimalis dan mudah dirawat untuk keluarga muda.' },

  // ── BEKASI RAYA ─────────────────────────────────────────────
  { slug: 'bekasi', nama: 'Bekasi', group: 'Bekasi Raya',
    landmark: 'Jatiasih, Jatibening, Bantargebang, Pondok Gede, Jatimakmur, Tambun',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 30–45 menit dari Cibubur',
    catatan: 'Bekasi dekat dengan Cibubur, sering jadi prioritas jadwal pemasangan.',
    unik: 'Bekasi adalah salah satu wilayah tersibuk kami karena jaraknya dekat dari Cibubur. Kawasan Jatiasih, Jatibening, dan Pondok Gede banyak rumah tipe 45–70 dengan dapur memanjang sempit. Untuk dapur model begitu, kami sering membuat kitchen set satu baris (single line) dengan kabinet atas sampai plafon, plus top table granit 2 cm yang tidak makan tempat.' },

  { slug: 'kabupaten-bekasi', nama: 'Kabupaten Bekasi', group: 'Bekasi Raya',
    landmark: 'Cikarang, Tambun, Setu, Cibitung, Sukatani, Pebayuran',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 60 menit dari workshop',
    catatan: 'Kabupaten Bekasi sering minta kitchen set untuk rumah cluster dengan dapur mungil.',
    unik: 'Kabupaten Bekasi punya banyak cluster baru bagi pekerja kawasan industri Cikarang dan Cibitung. Dapur di rumah cluster umumnya kecil (sekitar 2x2 meter), sehingga paling menantang soal penyimpanan. Solusi yang sering kami pakai: laci tarik penuh sampai bawah, rak sudut berputar, dan kabinet gantung sampai plafon agar semua peralatan muat.' },

  { slug: 'cikarang', nama: 'Cikarang', group: 'Bekasi Raya',
    landmark: 'Cikarang Utara, Cikarang Selatan, Lippo Cikarang, Jababeka',
    ongkir: 'ongkir gratis untuk JABODETABEK', effort: 'sekitar 60–75 menit dari Cibubur',
    catatan: 'Banyak keluarga baru di Cikarang memilih kitchen set aluminium karena perawatan mudah.',
    unik: 'Cikarang (Lippo Cikarang, Jababeka) banyak dihuni keluarga pekerja pabrik yang sibuk. Karena waktu terbatas, mereka cenderung memilih material yang minim perawatan: kitchen set rangka aluminium dan top table granit atau quadra yang tinggal dilap. Kami juga sering mengirim desain 3D dulu lewat WhatsApp, sehingga survei fisik hanya sekali sebelum produksi.' },

  // ── WILAYAH SEKITAR ─────────────────────────────────────────
  { slug: 'karawang', nama: 'Karawang', group: 'Sekitarnya',
    landmark: 'Karawang Barat, Karawang Timur, Klari, Telukjambe, Cikampek',
    ongkir: 'ada minimal order — hubungi kami', effort: 'sekitar 90 menit dari Cibubur',
    catatan: 'Untuk Karawang berlaku minimal order karena jarak dari workshop.',
    unik: 'Karawang masih masuk jangkauan kami dengan minimal order karena jaraknya. Pelanggan di Karawang dan Klari biasanya memesan untuk rumah baru atau kontrakan usaha yang ingin tampil lebih rapi. Karena jarak, kami menggabungkan pemasangan kitchen set dan top table dalam satu jadwal agar efisien dan biaya kirim lebih hemat.' },

  { slug: 'serang', nama: 'Serang', group: 'Sekitarnya',
    landmark: 'Serang Kota, Cipocok Jaya, Curug, Kasemen, Walantaka',
    ongkir: 'ada minimal order — hubungi kami', effort: 'sekitar 2,5 jam dari Cibubur',
    catatan: 'Wilayah Serang kami layani dengan minimal order; jadwal survei disesuaikan.',
    unik: 'Serang kami layani dengan minimal order dan jadwal terencana karena jaraknya jauh. Biasanya pesanan dari Serang berupa renovasi dapur rumah dinas atau rumah usaha yang butuh kitchen set fungsional dan kuat. Untuk wilayah ini, desain 3D dikirim lebih dulu agar revisi bisa selesai sebelum tim berangkat ke lokasi.' },

  { slug: 'bandung', nama: 'Bandung', group: 'Sekitarnya',
    landmark: 'Bandung Kota, Cimahi, Dago, Buahbatu, Antapani, Margahayu',
    ongkir: 'ada minimal order — hubungi kami', effort: 'sekitar 2,5 jam dari Cibubur',
    catatan: 'Untuk Bandung kami melayani pesanan dengan minimal order dan jadwal terencana.',
    unik: 'Bandung dan Cimahi kami layani dengan minimal order. Pelanggan Bandung biasanya mencari desain yang rapi dan enak dilihat untuk hunian atau usaha kuliner kecil. Karena jarak tempuh cukup jauh, pengukuran, produksi, dan pemasangan dijadwalkan dalam satu blok waktu agar tidak bolak-balik dan biaya tetap efisien.' },

  { slug: 'sukabumi', nama: 'Sukabumi', group: 'Sekitarnya',
    landmark: 'Sukabumi Kota, Cisaat, Cibadak, Cicurug, Parungkuda',
    ongkir: 'ada minimal order — hubungi kami', effort: 'sekitar 2 jam dari Cibubur',
    catatan: 'Sukabumi cukup dekat lewat jalur Cibubur–Ciawi; pesanan dengan minimal order.',
    unik: 'Sukabumi relatif mudah dijangkau lewat jalur Cibubur–Ciawi, tapi tetap dengan minimal order. Banyak pesanan dari Sukabumi berupa kitchen set untuk rumah tinggal dan homestay di area Cibadak dan Cicurug. Karena udara sejuk, pelanggan di sini lebih memilih material kayu HPL hangat dipadukan top table granit yang tahan air.' },

  { slug: 'purwakarta', nama: 'Purwakarta', group: 'Sekitarnya',
    landmark: 'Purwakarta Kota, Jatiluhur, Bungursari, Plered, Cibatu',
    ongkir: 'ada minimal order — hubungi kami', effort: 'sekitar 1,5 jam dari Cibubur',
    catatan: 'Purwakarta dilayani dengan minimal order; silakan konsultasi jadwal pemasangan.',
    unik: 'Purwakarta adalah salah satu wilayah terjauh yang kami layani, sekitar 1,5 jam dari Cibubur. Pesanan dari Purwakarta biasanya kitchen set untuk rumah tinggal baru dan kafe kecil di sekitar Jatiluhur. Karena jarak, kami sarankan pelanggan mengirim ukuran ruang lebih dulu via WhatsApp, lalu kami kirim desain 3D sebelum jadwal survei dipastikan.' },
];

// Materi unik per kota agar tiap halaman TIDAK duplikat (SEO penting).
export const cityCopy = (c) => ({
  title: `Jasa Kitchen Set Custom ${c.nama} — Mulai Rp 1.800.000`,
  description: `Jasa pembuatan kitchen set custom ${c.nama} dengan desain 3D gratis dan garansi 1 tahun. Melayani ${c.landmark}. Konsultasi & survei gratis, ${c.ongkir}.`,
  h1: `Jasa Kitchen Set Custom ${c.nama}`,
  intro: `Cari jasa kitchen set custom di ${c.nama} yang benar-benar mengikuti ukuran ruang Anda? Ray Furniture & Stone melayani kota ${c.nama} dari workshop kami di Cibubur sejak 2010. ${c.effort}.`,
  unik: c.unik,
  lokal: [
    `Kami melayani pelanggan di ${c.landmark}, termasuk rumah baru, apartemen, dan renovasi dapur lama.`,
    `Harga kitchen set ${c.nama} mulai Rp 1.800.000 per meter lari (lebar standar 60 cm), sudah termasuk jasa pasang dan bonus standar.`,
    `Setiap pesanan kitchen set ${c.nama} dimulai dari desain 3D gratis — Anda bisa revisi sampai cocok baru produksi.`,
  ],
});

// Nama semua kota untuk blok geo/SEO di hub & halaman pendukung.
export const cityNames = kitchenCities.map((c) => c.nama);
