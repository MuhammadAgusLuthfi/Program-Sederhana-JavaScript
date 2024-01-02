// membuat variabel untuk menyimpan nama barang, harga, dan jumlah
let namaBarang = prompt("Masukkan Nama Barang:");
let harga = Number(prompt("Masukkan Harga Barang:"));
let jumlah = Number(prompt("Masukkan Jumlah Barang:"));

// membuat variabel untuk menghitung total harga
let totalHarga = harga * jumlah;

// menampilkan informasi barang, harga, dan jumlah
console.log("Barang: " + namaBarang);
console.log("Harga: " + harga);
console.log("Jumlah: " + jumlah);

// mengulangi input barang dan harga sampai user memilih berhenti
while (true) {
  let pilihan = prompt("Tambah Barang? (y/n)");
  if (pilihan.toLowerCase() === "y") {
    namaBarang = prompt("Masukkan Nama Barang:");
    harga = parseInt(prompt("Masukkan Harga Barang:"));
    jumlah = parseInt(prompt("Masukkan Jumlah Barang:"));
    totalHarga += harga * jumlah;
    console.log("Barang: " + namaBarang);
    console.log("Harga: " + harga);
    console.log("Jumlah: " + jumlah);
  } else if (pilihan.toLowerCase() === "n") {
    break;
  } else {
    alert("Input tidak valid. Silahkan coba lagi.");
  }
}

// menampilkan total harga
console.log("Total Harga: " + totalHarga);