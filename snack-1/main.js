// utente inserisce i due numeri 

let number1 = parseInt (prompt("Inserisci il primo numero"));
let number2 = parseInt (prompt("Inserisci il secondo numero"));

// confronta e stampa il maggiore
let maggiore;
if (number1 > number2) {
  maggiore = number1;
} else {
  maggiore = number2;
}

// stampa il risultato 
console.log("Il numero maggiore è: " + maggiore);
