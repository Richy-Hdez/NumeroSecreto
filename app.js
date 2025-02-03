//variables
let numeroSecreto = 0;
let intentos= 0;
let numMaximo= 5;
let listaDeNumerosSorteados= []; 
//iniciando el juego 
condicionesIniciales();
//funcion para asignar un texto nuevo
function textoParaHTML(etiqueta, texto){
    console.log(`Cambiando el texto de ${etiqueta} a: ${texto}`);
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
    return;
}

//fucnion para generar el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado =Math.floor(Math.random()*numMaximo)+1;  
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados); 
    if(listaDeNumerosSorteados.length == numMaximo){
        textoParaHTML('p','hola');
        return; 
        alert('se acabaron los numeros');
    }else{
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   
//funcion para verificar el numero
function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario===numeroSecreto){
        textoParaHTML('p', `Le atinaste, lo hiciste en ${intentos} ${intentos===1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroSecreto){
            textoParaHTML('p', 'El numero secreto es menor');
        }else{
            textoParaHTML('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
//funcion para limpiar lo que haya en la caja 
function limpiarCaja(){
    let valorCaja= document.getElementById('valorUsuario').value = '';
}
//funcion que se inicialisa con el juego
function condicionesIniciales() {
    numeroSecreto = generarNumeroSecreto();    
    intentos= 1;
    textoParaHTML('h1', 'Hola jugadores');
    textoParaHTML('p', `Dame un numero del 1 al ${numMaximo}`);
}
//funcion que reinicia el juego 
function reiniciarJuego(){
    condicionesIniciales();
    limpiarCaja();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();