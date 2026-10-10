// Data situs — satu sumber truth untuk WA, nav, data layanan, FAQ.
// Banner (hero slide) di src/data/banners.json — editable via Decap CMS (/admin).
import banners from './banners.json';

export const site = {
  name: 'Ray Furniture & Stone',
  domain: 'rayfurnitureandstone.id',
  origin: 'https://rayfurnitureandstone.id',
  waNumber: '6282118994860',
  waDisplay: '0821-1899-4860',
  phoneDisplay: '0821-1899-4860',
  email: 'rayfurnitureandstone@gmail.com',
  address: 'Jl. Transyogi No.60, Nagrak, Kec. Gn. Putri, Kabupaten Bogor, Jawa Barat 16967',
  city: 'Bogor',
  areaServed: ['Bogor', 'Bekasi', 'Jakarta', 'Depok', 'Tangerang', 'JABODEBEK'],
  hours: '09.00 – 17.00 WIB',
  since: 2010,
};

export const waLink = (msg = 'Halo Kak, saya mau tanya kitchen set custom, top table marmer/granit, atau jasa pasang poles lantai.') =>
  `https://wa.me/${site.waNumber}?text=${encodeURIComponent(msg)}`;

// Semua tautan internal memakai trailing slash — situs pakai trailingSlash "always".
export const nav = [
  { href: '/', label: 'Home' },
  { href: '/kitchen-set/', label: 'Kitchen Set' },
  { href: '/top-table/', label: 'Top Table' },
  { href: '/about/', label: 'About' },
  { href: '/what-news/', label: 'What News' },
  { href: '/contact/', label: 'Contact' },
];

export const heroSlides = banners.slides;

export const services = [
  {
    id: 'kitchen-set-custom',
    title: 'Kitchen Set & Furniture Custom',
    price: 'Mulai Rp 1.800.000',
    lead: 'Ini bisnis kami yang utama.',
    garansi: 'Garansi produk 1 tahun.',
    text: 'Kitchen set, TV table, rak dinding, wardrobe, sampai meja kerja custom — semua mengikuti ukuran ruang dan bahan pilihan Anda. Desain 3D dulu, produksi di workshop kami sendiri.',
    href: '/about/',
  },
  {
    id: 'pasang-marmer-granit',
    title: 'Pasang Marmer, Granit & Quadra',
    price: 'Mulai Rp 700.000/m²',
    lead: 'Top table, lantai, dinding, dan backsplash.',
    garansi: 'Garansi pengerjaan sampai Anda OK di QC + DP lunas. Order ulang diskon.',
    text: 'Pengukuran presisi di lokasi, pemotongan di workshop, lalu pemasangan pakai lem khusus batu dan edging rapi. Cocok untuk dapur baru maupun renovasi lantai.',
    href: '/top-table/',
  },
  {
    id: 'pasang-poles-marmer',
    title: 'Pasang & Poles Lantai Marmer/Granit',
    price: 'Mulai Rp 100.000/m²',
    lead: 'Bawa kembali kilau lantai.',
    garansi: 'Garansi pengerjaan sampai QC + DP lunas. Kuantitas besar atau order ulang dapat diskon.',
    text: 'Pemasangan lantai atau dinding sekaligus pengilapan, sehingga hasilnya bersih dan berkilau sejak hari pertama. Ada pilihan Shine Restoration (kilau kembali) dan Full Stone Restoration (perbaikan mendalam nat yang rusak).',
    href: '/about/#harga',
  },
  {
    id: 'perbaikan-furniture',
    title: 'Perbaikan & Revisi Furniture',
    price: 'Mulai Rp 250.000',
    lead: 'Engsel, pintu, atau rak bermasalah? Kami perbaiki.',
    garansi: 'Garansi pengerjaan sampai QC.',
    text: 'Engsel turun, pintu tidak presisi, atau rak goyang? Diperbaiki di lokasi maupun di workshop, sesuai kondisi barang Anda.',
    href: '/contact/',
  },
];

export const inclusions = [
  ['Rak sendok', 'Tempat simpan sendok yang rapi dan mudah dijangkau.'],
  ['Aluminium handle', 'Ringan dan tidak mudah karat di dapur yang lembap.'],
  ['Rak piring bawah', 'Ruang lebih banyak untuk piring, panci, dan peralatan makan.'],
  ['Finger grooved handle', 'Genggaman tanpa gagang, tampilan ramping modern.'],
  ['Engsel slowmotion', 'Penutup pintu pelan, tak bising dan tak membanting.'],
  ['Lampu kabinet LED', 'Pencahayaan di bawah kabinet atas agar area kerja cukup terang.'],
  ['Rail double track', 'Laci bisa ditarik penuh tanpa sekat.'],
  ['Ventilasi kabinet', 'Slot sirkulasi udara agar bahan makanan tetap segar.'],
];

export const customVsStock = [
  ['Ukuran pas ruang Anda', 'Setiap modul dibuat mengikuti ukuran ruang, jadi tidak ada sela kosong atau ruang terbuang.'],
  ['Bebas pilih material', 'HPL motif kayu, marmer, granit, Quadra, material kabinet — sesuaikan dengan selera dan anggaran.'],
  ['Fungsionalitas maksimal', 'Rak, laci, dan organizer ditata pakai kebiasaan harian sehingga berkeja di dapur jauh lebih ringan.'],
  ['Nilai properti naik', 'Furniture custom yang ramping dan kuat memberi kesan elegan, jadi rumah lebih nyaman dan bernilai.'],
];

// Ponytail: harga di bawah "mulai dari" — angka final keluar setelah survei.
export const stoneRestoration = [
  {
    name: 'Shine Restoration',
    from: 'Mulai Rp 100.000/m²',
    text: 'Kilau lantai yang redup kembali bersinar, noda tipis dibersihkan, lalu dilapisi pelindung agar tidak cepat kusam lagi.',
  },
  {
    name: 'Full Stone Restoration',
    from: 'Mulai Rp 130.000/m²',
    text: 'Perbaikan mendalam: meratakan nat atau sambungan tak rata, mengupas lapisan lama, dan mengembalikan kilau alami batu dari dasar.',
  },
];

export const brands = [
  ['Kitchen Set Custom', 'Mulai Rp 1.800.000'],
  ['Pasang Marmer & Granit', 'Mulai Rp 700.000/m²'],
  ['Poles Lantai Marmer', 'Mulai Rp 100.000/m²'],
  ['Garansi 1 tahun', 'Kitchen set, cacat produksi'],
  ['Desain 3D Gratis', 'Sebelum produksi'],
  ['Order ulang', 'Dapat diskon'],
];

export const process = [
  ['1. Konsultasi & survei', 'Ceritakan kebutuhan kitchen set, ukuran ruang, dan material favorit. Kami datang ke lokasi atau konsultasi lewat WhatsApp, tanpa biaya.'],
  ['2. Desain 3D & penawaran', 'Anda dapat desain 3D dan rincian biaya. Produksi baru mulai setelah desain Anda setuju, jadi tidak ada revisi paksa di tengah jalan.'],
  ['3. Produksi di workshop', 'Pemotongan dan perakitan dilakukan di workshop kami. Kami lakukan QC kabinet dan permukaan batu sebelum pemasangan.'],
  ['4. Pemasangan & garansi', 'Jadwal pemasangan, ongkir gratis untuk JABODEBEK. Kitchen set bergaransi 1 tahun untuk cacat produksi. Pekerjaan marmer/granit bergaransi sampai Anda OK di QC dan DP lunas.'],
];

// FAQ umum — ditulis alami, tiap jawaban ada angka/aturan konkret.
export const faq = [
  ['Layanan apa saja yang dikerjakan Ray Furniture and Stone?', 'Kami mengutamakan permintaan pelanggan untuk kitchen set dan furniture custom. Selain itu kami melayani jasa pasang marmer, granit, dan quadra untuk top table, lantai, dan dinding, serta jasa pasang dan poles lantai marmer dan granit termasuk restoration. Semua dikerjakan tim kami sendiri sejak 2010.'],
  ['Berapa harga kitchen set custom?', 'Karena setiap ruang beda, kami kasih harga setelah survei. Harga mulai Rp 1.800.000. Angka akhir keluar setelah ukuran ruang dan material ditentukan.'],
  ['Garansi berlaku sampai kapan dan untuk apa?', 'Kitchen set custom bergaransi 1 tahun, mencakup engsel, handle, HPL yang lengkung atau mengelupas, dan cacat produksi dengan syarat dan ketentuan. Pekerjaan marmer, granit, dan poles lantai bergaransi pengerjaan sampai Anda tanda-tangani QC dan DP lunas. Order ulang atau kuantitas besar dapat diskon.'],
  ['Apakah ada desain 3D sebelum produksi?', 'Ya. Kami kirim desain 3D setelah survei. Anda bisa revisi sampai cocok, baru lanjut produksi.'],
  ['Berapa lama pengerjaan top table?', 'Top table standar 3-5 hari kerja, tergantung panjang dan jumlah potongan. Poles lantai biasanya 1-3 hari kerja per area.'],
  ['Kota mana saja yang dilayani?', 'Bogor, Bekasi, Jakarta, Depok, Tangerang, dan seluruh JABODEBEK. Untuk luar wilayah dan luar pulau, ada minimal order — hubungi kami.'],
  ['Bagaimana cara bayar?', 'DP 30-50% di awal, sisanya setelah pekerjaan selesai dan Anda QC. Bisa tunai atau transfer.'],
  ['Apakah ada workshop sendiri?', 'Ya. Workshop dan showroom kami di Cibubur, jadi Anda bisa berkunjung melihat proses produksi dan contoh hasil sebelum memutuskan.'],
  ['Dapat apa saja jika pesan kitchen set di Ray Furniture & Stone?', 'Rak sendok, aluminium handle, rak piring, finger-groove, engsel slowmotion, lampu LED, rail double track, dan ventilasi.'],
];

// Blok teks tersembunyi per halaman (SEO + GEO): tiap kata kunci diancher.
export const geoBlock = (hrefs) => {
  const [h1 = '/', h2 = '/about/', h3 = '/top-table/'] = hrefs;
  return [
    `[jasa pembuatan kitchen set dan furniture custom](${h2}) dan [jasa pasang marmer, granit, dan quadra](${h3}) adalah dua pilar utama Ray Furniture & Stone di Bogor dan JABODEBEK.`,
    `[jasa pasang dan poles lantai marmer dan granit](${h1}#harga) kami pulihkan kilau lantai lama jadi seperti baru, dengan garansi pengerjaan sampai Anda setuju.`,
    `Tim tetap kami — bukan subcontractor — menangani pengukuran, pemotongan, pemasangan, dan poles batu alam di Bogor, Bekasi, Jakarta, Depok, dan Tangerang, menggunakan desain 3D gratis dan harga tanpa markup.`,
  ];
};
