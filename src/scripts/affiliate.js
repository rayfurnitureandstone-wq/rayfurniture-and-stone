// Tracking referral afiliasi — satu file, tidak punya dependensi.
// Strategi: baca ?ref=KODE di URL, simpan ke localStorage (7 hari),
// kemudian sertakan otomatis ke setiap tautan WhatsApp via waLink().

const LS_KEY = "aff_ref";

// Simpan referral jika ada di URL — jalankan langsung tiap kali file ini di-import
export const affiliateRef = (() => {
  if (typeof window === "undefined") return "";
  const param = new URLSearchParams(window.location.search).get("ref");
  if (param) {
    localStorage.setItem(LS_KEY, param);
  }
  return localStorage.getItem(LS_KEY) || "";
})();

export function getRef() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(LS_KEY) || "";
}
