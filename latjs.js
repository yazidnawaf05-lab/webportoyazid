let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");

function tambah(){
    let hasil = parseInt(angka1.value)+parseInt(angka2.value);
    alert("hasil penjumlahan: "+hasil);
    
}
let btnTambah = document.getElementById("tambah");
btnTambah.onclick = tambah;
