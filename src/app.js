// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };
const MensajePC = document.getElementById('mensajePC');
const botonRock = document.getElementById('rock');
const botonPaper = document.getElementById('paper');
const botonScissors = document.getElementById('scissors');
const botonLizard = document.getElementById('lizard');
const botonSpock = document.getElementById('spock');
const botonBlank = document.getElementById('blank');
const icono = botonBlank.querySelector('i');
const mensaje = document.getElementById('respuesta');
const botonEleccion = document.getElementById('eleccionPC');

const choises = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const iconos = {
  rock: 'fa-hand-back-fist',
  paper: 'fa-hand',
  scissors: 'fa-hand-scissors',
  lizard: 'fa-hand-lizard',
  spock: 'fa-hand-spock',
};
const rules = {
  rock: ['scissors', 'lizzard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizzard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function Juego(userChoise) {
  const computerMath = Math.floor(Math.random() * choises.length)
  const computerChoiiise = choises[computerMath]
  botonEleccion.innerHTML = "<button class='btn btn-primary'><i class='fa-solid " + iconos[computerChoiiise] + "'></i>"

  if (userChoise === computerChoiiise) {
    return mensaje.textContent = 'Empate';
  } else if (rules[userChoise].includes(computerChoiiise)) {
    return mensaje.textContent = 'Haz ganao';
  } else {
    return mensaje.textContent = 'Que mal RNG';
  }
}

function actualizarIcono(tipo) {
  if (icono.classList.contains('fa-play')) {
    icono.classList.remove('fa-play');
  } else {
    icono.classList.remove('fa-hand-back-fist', 'fa-hand','fa-hand-scissors','fa-hand-lizard','fa-hand-spock'); /**Queria Anhadir o usar icono.classList.toggle("icono", condicion) declarando una variable que de falsa si 'fa-play' no xistia */
  }//Para no tener que usar todos los iconos dentro de remove, pero mi cerebro no llego hasta alli.
  switch (tipo) {
    case 'rock':
      icono.classList.add('fa-hand-back-fist');
      break;
    case 'paper':
      icono.classList.add('fa-hand');
      break;
    case 'scissors':
      icono.classList.add('fa-hand-scissors');
      break;
    case 'lizard':
      icono.classList.add('fa-hand-lizard');
      break;
    case 'spock':
      icono.classList.add('fa-hand-spock');
      break;
  }
}

botonRock.addEventListener("click", () => { Juego('rock'); actualizarIcono('rock'); });
botonPaper.addEventListener("click", () => { Juego('paper'); actualizarIcono('paper'); });
botonScissors.addEventListener("click", () => { Juego('scissors'); actualizarIcono('scissors'); });
botonLizard.addEventListener("click", () => { Juego('lizard'); actualizarIcono('lizard'); });
botonSpock.addEventListener("click", () => { Juego('spock'); actualizarIcono('spock'); });
 