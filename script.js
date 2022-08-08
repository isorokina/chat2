
///const API="https://chat21.ijasorokina2.repl.co"
const API="https://chat2newkursi.ijasorokina2.repl.co"
//alert(1)
//console.log(1)

let zinja = document.querySelector('.manaZinja');
let zinjas = document.querySelector('.chataZinjas');
let vaards = document.querySelector('.vaards');

function suutiitZinju()
{
   console.log('Suutiit ziņu darbojās'); // pārbaude
   zinjas.innerHTML=zinjas.innerHTML+'<br />'+zinja.value;
   fetch(API+'/suutiit/'+vaards.value+'/'+zinja.value)
}

async function ielaadeetChataZinjas()
{
   let datiNoServera = await fetch(API+'/lasiit');
///let datiNoServera = await fetch('chatazinjas.txt');
///let dati = await datiNoServera.text();
let dati = await datiNoServera.text();
zinjas.innerHTML = dati;
//console.log(dati); pārbaude
}



//setInterval( ielaadeetChataZinjas, 1000 )//ielādē katru 1 sek

async function ielaadeetChataZinjasJson()
{
let datiNoServera = await fetch(API+'/lasiit');
let dati = await datiNoServera.json();
//console.log(await dati[0]['zinja'])
i=0;
while (i<await dati.length)
{
   console.log(i);
   zinjas.innerHTML=zinjas.innerHTML+dati[i]['zinja'];
   i=i+1;
}



//console.log(await dati)
}//šeit beidzāš ielaadeetChataZinjasJson()