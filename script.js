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

// Function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let syahdan = Mahasiswa('Syahdan', 10);
// let dimas = Mahasiswa('Dimas', 20);

// Constructor function
// Menggunakan keyword new
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }

    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

let syahdan = new Mahasiswa('Syahdan Masyhuri', 10);
// Object.create()