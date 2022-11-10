// Generare un numero random da 1 a 6 per il giocatore
let playerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero player: " + playerNumber);

// Generare un numero random da 1 a 6 per il computer
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log("Numero computer: " + computerNumber);

// Se il giocatore ha il numero piu alto vince
if (playerNumber > computerNumber) {
  console.log("Ha vinto il player!")
  //Se il computer ha il numero piu alto vince
} else if (playerNumber < computerNumber) {
  console.log("Ha vinto il computer!")
  //Se i numeri sono uguale, chiedo di rilanciare i dadi
} else if (playerNumber === computerNumber) {
  console.log("Parità, rilanciate i dadi!")
}