let Index;

const weight = prompt("Kilonuzu Giriniz");
const height = prompt("Boyunuzu giriniz (1.75)");

Index = Math.floor((weight) / (height*height));
console.log(Index)

if (Index < 0){
    alert("HATA DEĞERLER SIFIRIN ALTINDA OLAMAZ!")
}


if (Index < 18.4 && Index > 0){
    alert("Kilo endeksiniz : "+Index + " Zayıfsınız!");
}

if (Index < 24.9 && Index > 18.5){
    alert("Kilo endeksiniz : "+Index + " Normal");
}

if (Index < 29.9 && Index > 25){
    alert("Kilo endeksiniz : "+Index + " Kilolu");
}

if (Index < 34.9 && Index > 30){
    alert("Kilo endeksiniz : "+Index + " Obez");
}

if (Index > 35){
    alert("Kilo endeksiniz : "+Index + ' 3.dereceden obez');
}


