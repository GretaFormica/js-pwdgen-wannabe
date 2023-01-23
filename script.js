//dichiarazione variabili
let user_name = prompt('Come ti chiami?');
let user_surname = prompt('Qual è il tuo cognome?');
let user_color = prompt('Il tuo colore preferito invece?');

document.getElementById('pass').innerHTML= ` Grazie,
la tua password sicura é: ${user_name}${user_surname}${user_color}23 ` ;