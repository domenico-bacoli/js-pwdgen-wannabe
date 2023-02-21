let userName = prompt("Inserisci il tuo Nome");
let userLastName = prompt("Inserisci il tuo Cognome");
let userFavoriteColor = prompt("Inserisci il tuo colore preferito");
let randomNumber = Math.floor( (Math.random() * 100 ) + 1 );

document.writeln(`${userName} ${userLastName} ${userFavoriteColor} ${randomNumber}`);