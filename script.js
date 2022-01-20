"use strict"

/* const ekipa1 = [112,89,95];
const ekipa2 = [85,108,98];

const calcAverage = (a,b,c) => (a+b+c)/3;
const scoreReal = calcAverage(ekipa1[0], ekipa1[1], ekipa1[2]); 
const scoreBarca = calcAverage(ekipa2[0], ekipa2[1], ekipa2[2]); 

console.log(scoreReal, scoreBarca);

const checkWinner = function(avgReal,avgBarca){
    if(avgReal >= (avgBarca)*2){
        console.log(`Real wins with ${avgReal} to ${avgBarca}`);
    }
    else if(avgBarca >= (avgReal)*2){
        console.log(`Barca wins with ${avgBarca} to ${avgReal}`); 
    }
    else {
        console.log("nema pobjednika xd");
    }
}

checkWinner(scoreReal,scoreBarca); */

/* const prijatelji = ["igor", "luka", "marko"]; */

/* prijatelji.push("Matija");
console.log(prijatelji);

//removes the last element
prijatelji.pop();
console.log(prijatelji);

//removes the first element
prijatelji.shift();
console.log(prijatelji); */

//returns -1 because Josip isn't in the array
/* console.log(prijatelji.indexOf("Josip"));
console.log(prijatelji.indexOf("marko"));

//includes returns either true or false
console.log(prijatelji.includes("Josip"));
console.log(prijatelji.includes("luka")); */

/* Joža želi napraviti jednostavna kalkulator za napojnice.
 U njegovoj zemlji je uobičajeno dati 15% za napojnicu ako
 je račun između 50 i 300. Ako je vrijednost drugačija, 20%
 
 Izračunaj napojnicu ovisno o veličini računa. Nparavi funkciju koja računa napojnicu.
 
 napravi listu koja će koristiti podatak dolje koje ćemo koristiti:
 testni podatci: 125,555,44
 
 Napravite listu napojnice koja će sadržavati value napojince za svaki račun
,vrijednosti koje ste dobili koristeći funkciju za izračun napojnica
 
 napravi listu sa ukupnim izmosima, znači račun + napojnica (total)
 
 tip:svaka lista treba vrijednosti na svakom polju i svaka vrijednost noze biti return vrijednost funkcije
 ne mozete samo nazbvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti
 napojnice u posebne varijable prvo nego direkt u novu listu*/

/*  function napojnicaCalc(iznos){
     if(iznos >=50 &&  iznos <=300){
         return (iznos* 0.15);
     }
     else{
         return (iznos*0.2);
     }
 }

const racuni = [125,555,44]

function rezultat(iznosRacuna){
    for(let i = 0; i <racuni.length; i++){
        console.log(`Napojnica za racun ${i} iznosa ${iznosRacuna[i]} je ${napojnicaCalc(racuni[i])}`);
    }
}

rezultat(racuni);
*/
const igorLista=["Igor", "Jevremovic",2022-1983,"Samosvojrob"];

/* Object literal syntax */

const igor = {
    firstName: 'Igor',
    lastName: 'Jevremović',
    godine: 2022-1983,
    zanimanje: 'Samosvojrob'
}

//dot notation
console.log(igor.firstName);

//bracket notation
console.log(igor["lastName"]);

//dot notation nam ne daje mogućnost spajanja više dijelova objekta, sa brackets mozes

const nameKey = "Name";

console.log(igor['first'] + "nameKey");
//fascinating execution order

