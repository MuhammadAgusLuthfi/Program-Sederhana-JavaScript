// membuat variabel untuk menyimpan nama barang dan harga
let namaBarang = prompt("Masukkkan Nama Barang:");
let harga = Number(prompt("Masukan Harga Barang"));

// membuat variabel untuk menghitung total harga

let totalHarga = harga;

// menampilkan nama barang dan harga

console.log("Barang : " + namaBarang);
console.log("Harga : " + harga);

// mengulangi input barang dan harga sampai user memilih berhenti

while (true) {
  let pilihan = prompt("Tambah Barang? (y/n)");
  if (pilihan.toLowerCase() === "y") {
    namaBarang = prompt("Masukan Nama Barang:");
    harga = Number(prompt("Masukkan Harga Barang: "));
    totalHarga += harga;
    console.log("Barang: " + namaBarang);
    console.log("Harga: " + harga);
  } else if (pilihan.toLowerCase() === "n") {
    break;
  } else {
    alert("inputan tidak valid!!. Silhakan coba lagi.");
  }

}
// menampilkan total harga
console.log("Total Harga = " + totalHarga);

