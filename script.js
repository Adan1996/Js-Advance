// Object literal
// let mahasiswa1 = {
//     nama: 'Syahdan',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Dimas',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }
// }

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// // Function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let syahdan = Mahasiswa('Syahdan', 10);
// let dimas = Mahasiswa('Dimas', 20);

// Constructor function
// Menggunakan keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// }

// let syahdan = new Mahasiswa('Syahdan Masyhuri', 10);
// Object.create()

// OBJECT DENGAN MENGGUNAKAN PROTOTYPE
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan. Ini ada makanan sebanyak ${porsi} porsi`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, anda sudah tidur sebanyak ${jam} jam`;
// }

// let syahdan = new Mahasiswa('Syahdan', 10);
// let dimas = new Mahasiswa('Dimas', 20);

// Object dengan menggunakan Class

// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan. Ini ada makanan sebanyak ${porsi} porsi`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, anda sudah tidur sebanyak ${jam} jam`;
//     }
// }

// let syahdan = new Mahasiswa('Syahdan', 50);
// let dimas = new Mahasiswa('Dimas', 30);

// EXECUTION CONTEXT, HOISTING & SCOPE
// creation phase pada Global context
/*
    yang terjadi pada fase creation phase adalah javascript akan mengecek
    apakah ada variable atau function di dalam kodingannya. Jika ada :
    nama variable = undifined
    nama function = fn()
    konsep ini disebut dengan HOISTING(dinaikan ke atas).
    Selain dua hal di atas, javascript juga mendefinisikan object :
    window = Global object
    this = window
    meskipun belum menuliskan kode apapun
*/

// Contoh kasus
// #1
// console.log(sayHello());

// var nama = "Syahdan Masyhuri";
// var umur = 23;

// function sayHello() {
//     return `Hallo, nama saya ${nama}, saya berumur ${umur} thn.`;
// }

// #2
// var nama = 'Syahdan Masyhuri';
// var username = '@syahdanmasyhuri';

// function cetakURL(username) {
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// #3 execution stack (tumpukan eksekusi)
// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();

// #4
function satu() {
    var nama = 'Syahdan';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Dimas';
satu();
dua('Dini');
console.log(nama);