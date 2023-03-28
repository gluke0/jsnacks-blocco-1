// Prompt per inserire le parole
let word1 = prompt("Inserisci parola 1");
let word2 = prompt("Inserisci parola 2");

// Determina la parola più corta e la più lunga
let shortWord;
let longWord;
if (word1.length < word2.length) {
    shortWord = word1;
    longWord = word2;
    console.log("La parola più corta è: " + shortWord);
    console.log("La parola più lunga è: " + longWord);
} else if (word1.length == word2.length) {
    console.log("le parole sono uguali");
}
else {
    shortWord = word2;
    longWord = word1;
    console.log("La parola più corta è: " + shortWord);
    console.log("La parola più lunga è: " + longWord);
}


