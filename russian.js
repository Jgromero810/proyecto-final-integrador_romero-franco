const botonJ = document.getElementById ("botonJ");
const botonY = document.getElementById ("botonY");
const botonV = document.getElementById ("botonV");
const winscreen = document.getElementById ("winner");
const lossscreen = document.getElementById ("losser");
let posicionActual = 0;
let posicionBala = 0;

botonJ.addEventListener ("click", iniciarjuego);

function iniciarjuego () {
    posicionActual = 0;
    posicionBala = 0
    
    botonj.style.display = "none";

    botonY.style.display = "inline-block";

    botonV.style.display = "inline-block";
}

function cargartambor () {
    //let posicionActual = Math.floor(Math.random() * 6) + 1;
    //return posicionActual;
    
    posicionBala = Math.floor(Math.random() * 6) + 1;
}

cargartambor ();

botonV.addEventListener ("click", vos)

function hayBala () {
    if (posicionActual == posicionBala) {
        return true
    }
    return false
}

function vos() {
    if (hayBala) {
        win ();
    }else {
        posicionActual ++;
    }
}

function yo() {
    if (hayBala) {
        loss ();
    }else {
        posicionActual ++;
    }
}

function win () {
    winner.style.display = "in block";
}

function loss () {
    losser.style.display = "in block";
}

//agregar aparecer boton de jugar de nuevo, te lleve a la funcion iniciar juego -> q esta funcion desaparezca la "win/loss screen".
//agregar turnos.
//agregar puntaje.

