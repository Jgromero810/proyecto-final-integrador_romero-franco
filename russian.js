const botonJugar = document.getElementById ("botonJugar");
const botonYo = document.getElementById ("botonYo");
const botonVos = document.getElementById ("botonVos");
const winscreen = document.getElementById ("winscreen");
const winner = document.getElementById ("winner");
const p1puntos = document.getElementById ("p1puntos");
const p2puntos = document.getElementById ("p2puntos");
let posicionActual = 0;
let posicionBala = 0;
let miTurno = true;
let puntajep1 = 0;
let puntajep2 = 0;

botonYo.style.display = "none";

botonVos.style.display = "none";

winscreen.style.display = "none";

botonJugar.addEventListener ("click", iniciarjuego);

function iniciarjuego() {
    posicionActual = 0;
    posicionBala = 0;
    miTurno = true;

    cargartambor();
    
    botonJugar.style.display = "none";

    winscreen.style.display = "none";

    botonYo.style.display = "block";

    botonVos.style.display = "block";
}

function cargartambor() {
    //let posicionActual = Math.floor(Math.random() * 6) + 1;
    //return posicionActual;
    
    posicionBala = Math.floor(Math.random() * 6) + 1;
}

botonVos.addEventListener ("click", vos)

function hayBala () {
    if (posicionActual == posicionBala) {
        return true
    }
    return false
}

function vos() {
    if (hayBala()) {
        if (miTurno == true){
            win(1);
        } else {
            win(2);
        }
        
    }else {
        posicionActual ++;
    }
}

function yo() {
    if (hayBala()) {
        if (miTurno == true) {
           win(2);
        } else {
            win(1);
        }
        
    }else {
        posicionActual ++;
    }
}

function win (numero) {

    botonYo.style.display = "none";
    botonVos.style.display = "none";
    winscreen.style.display = "block";
    botonJugar.style.display = "block";

    if (numero == 1){
        winner.replace = "winner", "player 1";
        puntajep1 ++;
        p1puntos.innerHTML = puntajep1;
    } else {
        winner.replace = "winner", "player 2";
        puntajep2 ++;
        p2puntos.innerHTML = puntajep2;

    }
}

//agregar aparecer boton de jugar de nuevo, te lleve a la funcion iniciar juego -> q esta funcion desaparezca la "winscreen". HECHO✔
//agregar turnos. HEHCO✔
//agregar puntaje. HECHO ✔

