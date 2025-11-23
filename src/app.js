// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

const botonRock = document.getElementById('rock');
const botonPaper = document.getElementById('paper');
const botonScissors = document.getElementById('scissors');
const botonLizard = document.getElementById('lizard');
const botonSpock = document.getElementById('spock');
const botonBlank = document.getElementById('blank');
const icono = botonBlank.querySelector('i');
const mensaje = document.getElementById('respuesta');

const choises = ['rock', 'paper', 'scissors', 'lizard', 'spock']
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

  if (userChoise === computerChoiiise) {
    return mensaje.textContent = 'Empate';
    ;
  } else if (rules[userChoise].includes(computerChoiiise)) {
    return mensaje.textContent = 'Haz ganao';
    ;
  } else {
    return mensaje.textContent = 'Que mal RNG';
    ;
  }
}
botonRock.addEventListener("click", () => Juego('rock'));
botonRock.addEventListener("click", function () {
  if (icono.classList.contains('fa-play')) {
    icono.classList.remove('fa-play');
    icono.classList.add('fa-hand-back-fist');
  } else {
    icono.classList.contains('fa-hand', 'fa-hand-lizard', 'fa-hand-spock', 'fa-hand-scissors');
    icono.classList.remove('fa-hand', 'fa-hand-lizard', 'fa-hand-spock', 'fa-hand-scissors');
    icono.classList.add('fa-hand-back-fist');
  }
});
botonPaper.addEventListener("click", () => Juego('paper'));
botonPaper.addEventListener("click", function () {
  if (icono.classList.contains('fa-play')) {
    icono.classList.remove('fa-play');
    icono.classList.add('fa-hand');
  } else {
    icono.classList.contains('fa-hand-back-fist', 'fa-hand-lizard', 'fa-hand-spock', 'fa-hand-scissors');
    icono.classList.remove('fa-hand-back-fist', 'fa-hand-lizard', 'fa-hand-spock', 'fa-hand-scissors');
    icono.classList.add('fa-hand');
  }
});

botonScissors.addEventListener("click", () => Juego('scissors'));
botonScissors.addEventListener("click", function () {
  if (icono.classList.contains('fa-play')) {
    icono.classList.remove('fa-play');
    icono.classList.add('fa-hand-scissors');
  } else {
    icono.classList.contains('fa-hand-back-fist', 'fa-hand', 'fa-hand-lizard', 'fa-hand-spock');
    icono.classList.remove('fa-hand-back-fist', 'fa-hand', 'fa-hand-lizard', 'fa-hand-spock');
    icono.classList.add('fa-hand-scissors');
  }
});

botonLizard.addEventListener("click", () => Juego('lizard'));
botonLizard.addEventListener("click", function () {
  if (icono.classList.contains('fa-play')) {
    icono.classList.remove('fa-play');
    icono.classList.add('fa-hand-lizard');
  } else {
    icono.classList.contains('fa-hand-back-fist', 'fa-hand', 'fa-hand-spock', 'fa-hand-scissors');
    icono.classList.remove('fa-hand-back-fist', 'fa-hand', 'fa-hand-spock', 'fa-hand-scissors');
    icono.classList.add('fa-hand-lizard');
  }
});

botonSpock.addEventListener("click", () => Juego('spock'));
botonSpock.addEventListener("click", function () {
  if (icono.classList.contains('fa-play')) {
    icono.classList.remove('fa-play');
    icono.classList.add('fa-hand-spock');
  } else {
    icono.classList.contains('fa-hand-back-fist', 'fa-hand', 'fa-hand-lizard', 'fa-hand-scissors');
    icono.classList.remove('fa-hand-back-fist', 'fa-hand', 'fa-hand-lizard', 'fa-hand-scissors');
    icono.classList.add('fa-hand-spock');
  }
});

