//
//let readline = require('readline-sync');
let poids = prompt('Entrer votre poids: ');
let taille = prompt('Entrer votre taille: ');


function imc(poids, taille) {
    
    return poids/Math.pow(taille, 2);
}

alert( imc(poids, taille));

