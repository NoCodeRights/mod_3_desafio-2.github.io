const paisaje = document.querySelector("#foto1");

foto1.addEventListener("click", function () {
    if(foto1.style.border === 'none'){
        foto1.style.border = '2px solid red';
    } else {
        foto1.style.border = 'none';
    }

});
