// array vuoto
let oddNum = [];

for (let i = 0; i < 6; i++) {
  let num = parseInt(prompt("Inserisci numero:"));

  if (num % 2 !== 0) {
    oddNum.push(num);
  }
}

console.log("I numeri dispari sono:", oddNum);
