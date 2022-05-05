// Fai inserire un numero, che chiameremo N, all’utente.
const n = Number(prompt("inserisci un numero"));
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.


// array formato da numeri casuali tra 1 e 100.
const arrayMain = []

for (i = 0; i < 10; i++){
    arrayMain.push(Math.floor(Math.random() * 100) + 1)
}

console.log(arrayMain)





