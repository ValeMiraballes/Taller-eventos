function saludoBoton(){
    alert("Hola!");
    
}

function saludoDiv(){
    alert("Hola! Soy el div")
    
}

document.addEventListener ('DOMContentLoaded', () => {
    const boton = document.querySelector('button');
    boton.addEventListener('click', saludoBoton);
});

document.addEventListener ('DOMContentLoaded', () => { 
    const estilobot = document.querySelector('div');
    estilobot.addEventListener('click', saludoDiv);
});