//variables
let numeroSecreto = 0;
let intentos= 0;
let listaDeNumerosSorteados= [];
let numMaximo= 10;
let totalIntentos= 0;
 
//funcion para asignar un texto nuevo
function textoParaHTML(etiqueta, texto){
    let etiquetaHTML = document.querySelector(etiqueta);
    etiquetaHTML.innerHTML = texto;
    return;
}
//funcion para verificar el numero
function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario===numeroSecreto){
        textoParaHTML('p', `Le atinaste, lo hiciste en ${intentos} ${intentos===1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        totalIntentos+= intentos;
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
//fucnion para generar el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numMaximo)+1;  
    if(listaDeNumerosSorteados.length == numMaximo){
        document.getElementById('intentar').setAttribute('disabled', 'true');
        textoParaHTML('p',`Ya no hay más numeros para sortear... Intentos totales: ${totalIntentos}`);
        return; 
    }else{
        if(listaDeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaDeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}   

//funcion que se inicialisa con el juego
function condicionesIniciales() {
    textoParaHTML('h1', 'Hola jugadores');
    textoParaHTML('p', `Dame un numero del 1 al ${numMaximo}`);
    numeroSecreto = generarNumeroSecreto();    
    intentos= 1;

}
//funcion que reinicia el juego 
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
