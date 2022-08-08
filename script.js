<<<<<<< HEAD
=======
///const API="https://chat21.ijasorokina2.repl.co"
const API="https://chat2newkursi.ijasorokina2.repl.co"
>>>>>>> f8951b0807a473fc4a8178eda63b8522dafbe1a1
//alert(1)
//console.log(1)

let zinja = document.querySelector('.manaZinja');
let zinjas = document.querySelector('.chataZinjas');

function suutiitZinju()
{
   // console.log('Suutiit'); pārbaude
   zinjas.innerHTML=zinjas.innerHTML+'<br />'+zinja.value;
}

async function ielaadeetChataZinjas()
{
let datiNoServera = await fetch('chatazinjas.txt');
let dati = await datiNoServera.text();
zinjas.innerHTML = dati;
//console.log(dati); pārbaude
}

setInterval( ielaadeetChataZinjas, 1000 )//ielādē katru 1 sek