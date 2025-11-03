let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("pengurangan");
let kali = document.getElementById("perkalian");
let bagi = document.getElementById("pembagian");
let texthasil = document.getElementById("hasil");

function penjumlahan() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);
   
    let Hasil = a + b;
    texthasil.innerHTML = "hasil: "+Hasil;
   
   

}
tambah.onclick = penjumlahan;

function pengurangan() {
     let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

     let Hasil1 = a - b;
     texthasil.innerHTML = "hasil: "+Hasil1;
}
kurang.onclick = pengurangan;

function perkalian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil2 = a * b;
    texthasil.innerHTML = "hasil :"+hasil2
}
kali.onclick = perkalian

function pembagian() {
    let a = parseInt(angka1.value);
    let b = parseInt(angka2.value);

    let hasil3 = a / b;
    texthasil.innerHTML = "hasil :"+hasil3
}
bagi.onclick = pembagian;
