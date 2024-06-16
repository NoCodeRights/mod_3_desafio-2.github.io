const ingresar = document.querySelector('#ingresar');

ingresar.addEventListener('click', function (){
    let input1 = document.querySelector('#num1').value;
    let input2 = document.querySelector('#num2').value;
    let input3 = document.querySelector('#num3').value;

    let respuesta = document.querySelector('#verifica');

    let unidos = input1 + input2 + input3;

    if(unidos === "911"){
        respuesta.innerHTML = "Password 1 correcto";
        respuesta.style.color = 'green';
    } else if (unidos === "714"){
        respuesta.innerHTML = "Password 2 correcto";
        respuesta.style.color = 'green';
    } else{
        respuesta.innerHTML = "Password incorrecto";
        respuesta.style.color = 'red';
    }
});