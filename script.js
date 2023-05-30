/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 18
const number2 = 17

if (number1 > number2) {
    console.log("Il primo numero inserito è maggiore del secondo")
}
else if (number1 === number2) {
    console.log("Il primo numero inserito è uguale al secondo")
}
else {
    console.log("Il primo numero inserito è minore del secondo")
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number3 = 10

if (number3 !== 5) {
    console.log("Not equal")
}
else {
    console.log("Equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number4 = 20


if (number4 % 5 === 0) {
    console.log("Divisibile per 5")
}
else {
    console.log("Non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const number5 = 27
const number6 = 45

if (number5 === 8 || number6 === 8) {
    console.log("Il valore di uno di due numeri è 8")
}
else if (number5 + number6 === 8) {
    console.log("L'addizione dei due valori è pari a 8")
}
else if (number5 - number6 === 8 || number6 - number5 === 8) {
    console.log("La differenza tra i due valori è pari a 8")
}
else {
    console.log("Ricontrolla i numeri inseriti")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 49

if (totalShoppingCart > 50) {
    console.log("L'ammontare da addebitare è pari a", totalShoppingCart)
}
else {
    console.log("L'ammontare da addebitare è pari a", totalShoppingCart + 10)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart1 = 100
const discountPrice = (totalShoppingCart1/100)*20

if (totalShoppingCart1 - discountPrice > 50) {
    console.log("L'ammontare da addebitare è pari a", totalShoppingCart1 - discountPrice, ", hai goduto di uno sconto pari a", discountPrice,"e le spedizione è gratuita!")
}
else {
    console.log("L'ammontare da addebitare è pari a", totalShoppingCart1 - discountPrice + 10,", hai goduto di uno sconto pari a", discountPrice,"con spese di spedizione pari a 10")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex7n1 = 27
const ex7n2 = 81
const ex7n3 = 44

if (ex7n1 > ex7n2 && ex7n2 > ex7n3) {
    console.log(ex7n1, ex7n2, ex7n3)
}
else if (ex7n1 < ex7n2 && ex7n2 < ex7n3) {
    console.log (ex7n3, ex7n2, ex7n1)
}
else if (ex7n1 > ex7n3 && ex7n3 > ex7n2) {
    console.log (ex7n1, ex7n3, ex7n2)
}
else if (ex7n2 > ex7n3 && ex7n3 > ex7n1) {
    console.log (ex7n2, ex7n3, ex7n1)
}
else if (ex7n2 > ex7n1 && ex7n1 > ex7n3) {
    console.log (ex7n2, ex7n1, ex7n3)
}
else if (ex7n3 > ex7n1 && ex7n1 > ex7n2) {
    console,log(ex7n3, ex7n1, ex7n2)
}




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const ex8 = 14

console.log(typeof ex8)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const ex9 = 11

if (ex9 % 2 === 0) {
    console.log("Bravissimo campione, è pari!")
}
else {
    console.log("Mi dispiace, è dispari!")
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

let val = 12
if (val < 5) {
    console.log("Meno di 5");
}
else if (val < 10) {
    console.log("Meno di 10");
}
else {
    console.log("Uguale a 10 o maggiore")
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
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  delete me.lastName
  console.log(me)
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  me.skills.pop()
  console.log(me)
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  const array = new Array()
  array.push(1)
  array.push(2)
  array.push(3)
  array.push(4)
  array.push(5)
  array.push(6)
  array.push(7)
  array.push(8)
  array.push(9)
  array.push(10)
  console.log(array)
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */

  array.pop()
  array.push(100)
  