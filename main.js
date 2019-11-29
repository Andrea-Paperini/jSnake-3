// creo la variabile numero inserendoci dei numeri casuali
var numeri = [5, 17, 21, 3, 46, 53];
// imposto la variabile somma partendo da 0 per fare la somma
var somma = 0;
console.log(numeri);

for (var i = 0; i < numeri.length; i++) {
    var risultatoFunzione = DispariPari(i);
    if (risultatoFunzione == "Dispari") {
        somma = somma + numeri[i];
        console.log("La posizione " + i + " è dispari");
        console.log("il numero in posizione " + i + " è " + numeri[i]);
        console.log("La somma è " + somma);
    } else {
        console.log("La posizione " + i + " è pari");
        console.log("il numero in posizione " + i + " è " + numeri[i]);
    }
}
console.log("La somma totate è " + somma);
// Creo la funzione per stabilire se un numero è dispari, cioè se diviso 2 da il resto di uno
function DispariPari(x) {
    if (x % 2 == 1) {
        return "Dispari"
    } else {
        return "Pari"
    }
}
