const botonJugar = document.getElementById("botonJugar");
const botondispararme = document.getElementById("botondispararme");
const botondisparar = document.getElementById("botondisparar");
const winscreen = document.getElementById("winscreen");
const emptyscreen = document.getElementById("emptyscreen");
const winner = document.getElementById("winner");
const p1puntos = document.getElementById("p1puntos");
const p2puntos = document.getElementById("p2puntos");
const luzroja1 = document.getElementById("luzroja1");
const luzroja2 = document.getElementById("luzroja2");
const luzverde1 = document.getElementById("luzverde1");
const luzverde2 = document.getElementById("luzverde2");
let posicionActual = 0;
let posicionBala = 0;
let turnoplayer1 = true;
let puntajep1 = 0;
let puntajep2 = 0;

botondispararme.style.display = "none";

botondisparar.style.display = "none";

winscreen.style.display = "none";

emptyscreen.style.display = "none";

luzverde1.style.display = "none";

luzverde2.style.display = "none";

function colorTurno() {

    if (turnoplayer1 == true) {
        luzroja1.style.display = "none";
        luzverde1.style.display = "block";
        luzroja2.style.display = "block";
        luzverde2.style.display = "none";
    } else {
        luzverde1.style.display = "none";
        luzroja1.style.display = "block";
        luzroja2.style.display = "none";
        luzverde2.style.display = "block";
    }

}


botonJugar.addEventListener("click", iniciarjuego);

function iniciarjuego() {
    colorTurno();
    posicionActual = 0;
    posicionBala = 0;
    turnoplayer1 = true;
    luzroja1.style.display = "none";
    luzverde1.style.display = "block";

    cargartambor();

    botonJugar.style.display = "none";

    winscreen.style.display = "none";

    botondispararme.style.display = "block";

    botondisparar.style.display = "block";
}

function cargartambor() {
    //let posicionActual = Math.floor(Math.random() * 6) + 1;
    //return posicionActual;

    posicionBala = Math.floor(Math.random() * 6) + 1;
}

function hayBala() {
    if (posicionActual == posicionBala) {
        return true
    }
    return false
}

botondisparar.addEventListener("click", disparar)

function disparar() {
    emptyscreen.style.display = "none";

    if (hayBala()) {
        if (turnoplayer1 == true) {
            win(1);
        } else {
            win(2);
        }

    } else {
        emptyscreen.style.display = "block";
        posicionActual++;
        turnoplayer1 = !turnoplayer1;
        colorTurno();
    }
}

botondispararme.addEventListener("click", dispararme)

function dispararme() {
    emptyscreen.style.display = "none";

    if (hayBala()) {
        if (turnoplayer1 == true) {
            win(2);
        } else {
            win(1);
        }

    } else {
        emptyscreen.style.display = "block";
        posicionActual++;
        turnoplayer1 = !turnoplayer1;
        colorTurno();
    }
}

function win(numero) {

    botondispararme.style.display = "none";
    botondisparar.style.display = "none";
    winscreen.style.display = "block";
    botonJugar.style.display = "block";

    if (numero == 1) {
        winner.innerHTML = "GANO EL PLAYER 1."
        puntajep1++;
        p1puntos.innerHTML = puntajep1;
    } if (numero == 2) {
        winner.innerHTML = "GANO EL PLAYER 2."
        puntajep2++;
        p2puntos.innerHTML = puntajep2;

    }
}

//agregar aparecer boton de jugar de nuevo, te lleve a la funcion iniciar juego -> q esta funcion desaparezca la "winscreen". HECHO✔
//agregar turnos. HEHCO✔; que funcione:
//agregar puntaje. HECHO ✔; que funcione:
//TODO: implementar boton disparar
//TODO: implementar feedback al presionar un boton
//TODO: implementar los turnos

