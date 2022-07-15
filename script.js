//alert(1)
//console.log(1)

function suutiitZinju()
{
    console.log('Suutiit');
    let zinja = document.querySelector('.manaZinja');
    let zinjas = document.querySelector('.chataZinjas');
   zinjas.innerHTML=zinjas.innerHTML+'<br />'+zinja.value;
}