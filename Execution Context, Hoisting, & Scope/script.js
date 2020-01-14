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
// function satu() {
//     var nama = 'Syahdan';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Dimas';
// satu();
// dua('Dini');
// console.log(nama);
