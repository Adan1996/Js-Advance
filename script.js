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

// Object dengan menggunakan Prototype
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

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan. Ini ada makanan sebanyak ${porsi} porsi`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, anda sudah tidur sebanyak ${jam} jam`;
    }
}

let syahdan = new Mahasiswa('Syahdan', 50);
let dimas = new Mahasiswa('Dimas', 30);