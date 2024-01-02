// membuat array untuk menyimpan kode barang, nama barang, dan harga
let daftarBarang = [
  { kode: "001", nama: "Buku Tulis", harga: 5000 },
  { kode: "002", nama: "Pensil", harga: 1000 },
  { kode: "003", nama: "Pulpen", harga: 3000 },
  { kode: "004", nama: "Penghapus", harga: 2000 },
  { kode: "005", nama: "Rautan", harga: 1500 },
];

// membuat variabel untuk menyimpan total harga
let totalHarga = 0;
let pembayaran = parseInt(prompt("Masukkan Uang Pembayaran:"));
// mengulangi input kode barang sampai user memilih berhenti
while (true) {
  let kodeBarang = prompt("Masukkan Kode Barang: atau (selesai) untuk membayar");
  let barang = daftarBarang.find(item => item.kode === kodeBarang);
  if (barang) {
    let jumlah = parseInt(prompt("Masukkan Jumlah Barang:"));
    totalHarga += barang.harga * jumlah;
    console.log("Barang: " + barang.nama);
    console.log("Harga: " + barang.harga);
    console.log("Jumlah: " + jumlah);
  } else if (kodeBarang.toLowerCase() === "selesai") {
    break;
  } else {
    alert("Kode barang tidak valid. Silahkan coba lagi.");
  }
}

// menampilkan total harga dan meminta input uang pembayaran
console.log("Total Harga: " + totalHarga);

// mengulangi input uang pembayaran sampai jumlah pembayaran cukup
while (pembayaran < totalHarga) {
  alert("Uang pembayaran tidak cukup. Pilih barang lain.");
  pembayaran = parseInt(prompt("Masukkan Uang Pembayaran:"));
}

// menghitung kembalian dan menampilkan informasi pembayaran dan kembalian
let kembalian = pembayaran - totalHarga;
console.log("Uang Pembayaran: " + pembayaran);
console.log("Kembalian: " + kembalian);