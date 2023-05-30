/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 3;
let numero2 = 5;
let numero3 = 10;

if (numero1 > numero2) {
  console.log(numero1 + " è il numero più grande.");
} else if (numero2 > numero1) {
  console.log(numero2 + " è il numero più grande.");
} else {
  console.log("I numeri sono uguali, non c'è un numero più grande.");
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = parseInt(prompt("Inserisci un numero intero:"));

if (numero !== 5) {
  console.log("not equal");  }

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numero % 5 === 0) {
  console.log("divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
  console.log("Una delle condizioni è soddisfatta: uno dei numeri è 8 o la loro addizione/sottrazione è uguale a 8.")  }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = parseFloat(prompt("Inserisci il saldo totale del carrello:"));
let totalAmount = 0;

if (totalShoppingCart > 50) {
  totalAmount = totalShoppingCart; // Nessun costo di spedizione 
} else {
  totalAmount = totalShoppingCart + 10; // Viene  aggiunto il costo fisso di spedizione
}
console.log("L'ammontare totale da addebitare all'utente per il checkout è: " + totalAmount);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let discount = totalShoppingCart * 0.2;
let discountedTotal = totalShoppingCart - discount;

if (discountedTotal > 50) {
  totalAmount = discountedTotal; // Nessun costo di spedizione
}
else {
  totalAmount = totalShoppingCart + 10; // Aggiungi il costo fisso di spedizione
}
console.log("L'ammontare totale da addebitare all'utente per il checkout è: " + totalAmount);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numero1 >= numero2 && numero1 >= numero3) {
  if (numero2 >= numero3) {
    console.log(numero1, numero2, numero3);
  } else {
    console.log(numero1, numero3, numero2);
  }
} else if (numero2 >= numero1 && numero2 >= numero3) {
  if (numero1 >= numero3) {
    console.log(numero2, numero1, numero3);
  } else {
    console.log(numero2, numero3, numero1);
  }
} else {
  if (numero1 >= numero2) {
    console.log(numero3, numero1, numero2);
  } else {
    console.log(numero3, numero2, numero1);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let dato = parseInt(prompt("Inserisci qualcosa"));
 if (typeof dato === 'number'){
  console.log("Il dato inserito è un Numero");
 } else {console.log("Il dato inserito non è un Numero")}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (numero % 2 === 0) {
  console.log("Il numero fornito è pari.");
} else {
  console.log("Il numero fornito è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 9
  if (x < 5) {
      console.log("Meno di 5");
    } else if (x < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
       }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto'

console.log (me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills.pop(3)
console.log (me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = [];

for (let i = 1; i <= 10; i++) {
  numeri.push(i);
}

console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[numeri.length - 1] = 100;

console.log(numeri);