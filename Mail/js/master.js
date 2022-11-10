// Chiedere all'utente la sua mail
let userMail = (prompt("Inserisci la tua email"));

// Array, lista invitati alla festa
const partyInvites = ["ElonMusk@vip.com", "BernardArnault@vip.com", "GautamAdani@vip.com", "JeffBezos@vip.com", "BillGates@vip.com"];

// Ciclo per verificare gli invitati
for (let i = 0; i < partyInvites.length; i++) {
  // Se presente nella lista puo entrare
  if (userMail == partyInvites[i]) {
    alert("Benvenuto alla festa!")
    var invitation = partyInvites[i];
  }
}

// Se non presente nella lista, ciao ciao
if (userMail !== invitation) {
  alert("L'uscita e' da quella parte")
}

