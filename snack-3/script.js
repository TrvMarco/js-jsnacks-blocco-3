// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// Seleziono i div tramite id
const firstDiv = document.getElementById("uno");
const secondDiv = document.getElementById("due");
// dò il colore al testo per ogni div
firstDiv.style.color = "red";
secondDiv.style.color = "green";

// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const array = [10,21,12,34,77,22,175,93,43];
 
for (let i = 0; i < array.length; i++){
    console.log(array[i])
    if(array[i] % 2 == 0){
        firstDiv.innerHTML += ` ${array[i]} `
    }else{
        secondDiv.innerHTML += ` ${array[i]} `
    }
}

