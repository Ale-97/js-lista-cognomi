var listSurname = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var surname = prompt('inserisci il tuo cognome');
var Surname = surname[0].toUpperCase() + surname.slice(1);
listSurname.push(Surname); 
listSurname.sort();
var positionSurname = listSurname.indexOf(Surname) + 1;

document.getElementById("printList").innerHTML = listSurname;
document.getElementById("printPosition").innerHTML = 'Il tuo cognome è ' + positionSurname + '° nella lista';

