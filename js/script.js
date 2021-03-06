/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


// Inserisco controllo JS
console.log('JS ok');

// Defiinisco costante prezzo biglietto al km
const pricePerKm = 0.21;

// Defiinisco costante sconto per minorenni
const discountMin = 1.20;

// Defiinisco costante sconto per over 65
const discountOver = 1.65;

// Richiesta all'utente di inserire il numero di KM che vuole percorrere
let km = parseInt(prompt('Quanti km vuoi percorrere?'));

// Richiesta all'utente età
let age = parseInt(prompt('Quanti anni hai?'));

// Calcolo costo biglietto in base ai km percorsi (senza applicare sconto) e controllo in console
let price = pricePerKm * km;
console.log(price);





