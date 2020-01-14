// KONSEP THIS PADA ARROW FUNCTION

// problem menggunakan constructor function
// let Mahasiswa = function () {
//     this.nama = 'Syahdan';
//     this.umur = 24;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur}`);
//     }
// }

// const syahdan = new Mahasiswa();

// Contoh 2
// menggunakan object literal
// const mhs1 = {
//     nama: 'Syahdan',
//     umur: 24,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur}`);
//         console.log(this);
//     }
// }

// Contoh 3
// let Mahasiswa = function () {
//     this.nama = 'Syahdan';
//     this.umur = 24;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, saya berumur ${this.umur}`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const syahdan = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});








































