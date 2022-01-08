//Entrez le côté d'un carré et imprimez : périmètre, aire, diagonale:

let cote = 4;

let perimetre = 0;
let aire = 0;
let diagonale = 0;

perimetre = 4 * cote;
aire = cote ** 2;
diagonale = cote * Math.sqrt(2).toFixed(2);

console.log("Le périmètre du carré = " + perimetre);
console.log("L'aire du carré = " + aire);
console.log("La diagonale du carré = " + diagonale);