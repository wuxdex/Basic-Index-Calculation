let Index;

const weight = 70;
const height = 1.75;

Index = (weight) / (height*height);
console.log(Index)

if (Index < 0){
    console.log("HATA DEĞERLER SIFIRIN ALTINDA OLAMAZ!")
}


if (Index < 18.4 && Index > 0){
    console.log("Zayıf");
}

if (Index < 24.9 && Index > 18.5){
    console.log("Normal");
}

if (Index < 29.9 && Index > 25){
    console.log("Kilolu");
}

if (Index < 34.9 && Index > 30){
    console.log("Obez");
}

if (Index > 35){
    console.log('3.derece');
}
