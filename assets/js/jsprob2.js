const calcular = document.querySelector('#calcular');

calcular.addEventListener('click', function(){
    let num1 = Number(document.getElementById('sticker1').value);
    let num2 = Number(document.getElementById('sticker2').value);
    let num3 = Number(document.getElementById('sticker3').value);

    let total = num1 + num2 + num3;

    if (total>10){
        mensaje.innerHTML = ("Llevas demasiados stickers");
        mensaje.style.color = 'red';
    } else{
        mensaje.innerHTML = ("Llevas " +total + " stickers");
        mensaje.style.color = 'green';
    }

});