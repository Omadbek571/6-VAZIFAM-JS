// 46 SAVOL


// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi.Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushuri
// bqoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin

// JAVOB

// function tushirMassiv(arr, tushirishSoni) {
//     return arr.slice(tushirishSoni);
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",").map(Number);
// var tushirishSoni = parseInt(prompt("Tushirish sonini kiriting:"));

// console.log(tushirMassiv(massiv, tushirishSoni));



// 47 SAVOL


// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin


// JAVOB

// function ovozlar(x, y) {
//     let num1 = +prompt("upvotes");
//     let num2 = +prompt("downvotes");

//     let sonlar = -num1 + num2;

//     console.log("javob:" , sonlar );
// }


// ovozlar()



// 49 SAVOL


// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring


//JAVOB


// function almash(arr) {
//     return arr.reverse();
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",").map(Number);

// console.log(almash(massiv));


// 51 SAVOL


// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.


// JAVOB

// function oshir1ga(arr) {
//     return arr.map(element => element + 1);
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",").map(Number);

// console.log(oshir1ga(massiv));


// 56 SAVOL


// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.


// JAVOB


// function songiElement(arr) {
//     return arr[arr.length - 1];
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",");

// console.log(songiElement(massiv));




// 62 SAVOL


// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.


// JAVOB


// function arrayToString(arr) {
//     var result = "";
//     for (var i = 0; i < arr.length; i++) {
//         result += String(arr[i]);
//     }
//     return result;
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",");

// console.log(arrayToString(massiv));


// 63 SAVOL


// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.

// JAVOB

// function birlash(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// var massiv1 = prompt("Birinchi massivni kiritng (vergul bilan ajrating):").split(",").map(Number);
// var massiv2 = prompt("Ikkinchi massivni kiritng (vergul bilan ajrating):").split(",").map(Number);

// console.log(birlash(massiv1, massiv2));


// 64 SAVOL


// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.

// JAVOB


// function topIndex(arr, str) {
//     return arr.indexOf(str);
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",");
// var element = prompt("Elementni kiritng:");

// console.log(topIndex(massiv, element));



// 65 SAVOL

// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.

// JAVOB

// function arrElement(arr, index) {
//     index = Math.floor(index);
//     return arr[index];
// }

// var massiv = prompt("Massivni kiritng (vergul bilan ajrating):").split(",").map(Number);
// var index = parseFloat(prompt("Indexni kiritng:"));

// console.log(arrElement(massiv, index));



// 66 SAVOL

// 66.Quyidagi namunani kuzatgan holda funksiya yasang


// JAVOB

// function namuna(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(namuna([1, 2, 3, 4, 5]));
// console.log(namuna([-1, 0, 1]));
// console.log(namuna([0, 4, 8, 12]));


// Promptan ism, telefon raqam, manzil ma'lumotlari olinib console log ka object ko'rinishida chiqaring.

// JAVOB


// let num1 = prompt("ILTMIMOS ISMINGIZNI KIRITING")
// let num2 = +prompt("ILTMIMOS TELEFON RAQAMIZDI KIRITING ")
// let num3 = prompt("ILTIMOS MANZILINGIZDI KIRITING")



// let obj = {
//     ism: num1,
//     tel: num2,
//     manzil: num3,
// }

// console.log(obj);