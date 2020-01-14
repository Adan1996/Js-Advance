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
