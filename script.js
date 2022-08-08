
///const API="https://chat21.ijasorokina2.repl.co"
const API="https://chat2newkursi.ijasorokina2.repl.co"
let zinja = document.querySelector('.manaZinja');
let zinjas = document.querySelector('.chataZinjas');


function suutiitZinju()
{
   // console.log('Suutiit'); pārbaude
   zinjas.innerHTML=zinjas.innerHTML+'<br />'+zinja.value;
}

async function ielaadeetChataZinjas()
{
   let datiNoServera = await fetch(API+'/lasiit');
///let datiNoServera = await fetch('chatazinjas.txt');
let dati = await datiNoServera.text();
zinjas.innerHTML = dati;
//console.log(dati); pārbaude
}

setInterval( ielaadeetChataZinjas, 1000 )//ielādē katru 1 sek
