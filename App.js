
var form = document.getElementById('formulario');
form.addEventlistener('submit',function(evt){
    evt.preventDefault();
    var mensajeError = [];

if(nombre.value === null || nombre.value === ''){
     mensajesError.push('Ingresa tu nombre'); 
}

if(email.value === null || email.value === ''){
     mensajesError.push('Ingresa tu email'); 
}

error.innerHTML = mensajesError.join( ', ');

});



