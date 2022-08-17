// document.write("Hello World")
// alert("Hello")
// console.log("helo batch 39")

// VAR
// LET
// CONST

// // Variable
// // bisa di declarasi ulang
// var gelas = "Kopi"
// var gelas = "Air Putih"
// console.log(gelas);

// // tidak bisa di declare ulang
// let mangkok = "Bakso"
// mangkok = "Mie Ayam"
// console.log(mangkok);

// // data tidak bisa diubah
// const botol = "Jeruk"
// console.log(botol);


// --------------------------
// // Type Data
// let nama = "Rahmat"
// let umur = 25

// // Nama saya Rahmat umur saya 25
// console.log(`nama saya ${nama} umur saya ${umur}`)
// console.log("nama saya", nama, "umur saya", umur)
// console.log("nama saya" + " " + nama + " " + "umur saya" + " " + umur)


// let bilanganSatu = 50
// let bilanganDua = "20"

// console.log(bilanganSatu - bilanganDua);

// -------------------------------
// // Condition

// let nilai = 60
// if (nilai > 70){
//     console.log("A");
// } else if(nilai >= 60 ) {
//     console.log("B");
// } else {
//     console.log("C");
// }


// // Function
// function bilangan(bilanganSatu, bilanganDua){

//     result = bilanganSatu + bilanganDua    
//     console.log(result);

// }

// bilangan(20,30)

// function bilangan(bilanganSatu, bilanganDua){

//     result = bilanganSatu + bilanganDua
    
//     return result

// }

// console.log(bilangan(30, 50));

function submitData(){

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    console.log;

   
}
