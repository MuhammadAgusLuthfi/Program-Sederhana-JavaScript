// membuat variabel untuk menyimpan nama barang dan harga
let namaBarang = prompt("Masukkan Nama Barang:");
let harga = Number(prompt("Masukkan Harga Barang:"));

// membuat variabel untuk menghitung total harga
let totalHarga = harga;

// menampilkan nama barang dan harga
console.log("Barang: " + namaBarang);
console.log("Harga: " + harga);

// mengulangi input barang dan harga sampai user memilih berhenti
while (true) {
  let pilihan = prompt("Tambah Barang? (y/n)");
  if (pilihan.toLowerCase() === "y") {
    namaBarang = prompt("Masukkan Nama Barang:");
    harga = parseInt(prompt("Masukkan Harga Barang:"));
    totalHarga += harga;
    console.log("Barang: " + namaBarang);
    console.log("Harga: " + harga);
  } else if (pilihan.toLowerCase() === "n") {
    break;
  } else {
    alert("Input tidak valid. Silahkan coba lagi.");
  }
}

// menentukan diskon berdasarkan total harga
let diskon = 10;
if (totalHarga >= 100000) {
  diskon = 0.1 * totalHarga;
}

// menampilkan diskon dan total harga setelah diskon
console.log("Diskon: " + diskon);
console.log("Total Harga: " + (totalHarga - diskon));