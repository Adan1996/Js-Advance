// ARROW FUNCTION

// menggunakan satu parameter
// const tampilNama = (nama) => { return `Halo, Nama saya ${nama}` }
// console.log(tampilNama("Syahdan Masyhuri"));

// menggunakan dua parameter
// const tampilNama = (waktu, nama) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Malam', 'Syahdan'));

// ketika menggunakan satu parameter tidak perlu menggunakan kurung dan return, bahkan tidak perlu menggunakan kurung kurawal
// atau bisa disebut dengan implisit return
// const tampilNama = nama => `Halo, Nama saya ${nama}`;
// console.log(tampilNama("Syahdan Masyhuri"));

// jika tidak menggunakan parameter, harus menggunakan tanda kurung
// const tampilNama = () => 'Halo Syahdan';
// console.log(tampilNama());

// contoh
// problem menggunakan map
// let mahasiswa = ['Syahdan', 'Dony', 'Riza'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// menggunakan arrow function
// let mahasiswa = ['Syahdan', 'Dony', 'Riza'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// mengembalikan nilai berupa object
// let mahasiswa = ['Syahdan', 'Dony', 'Riza'];
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);
