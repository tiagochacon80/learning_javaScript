//Entrez la base et la hauteur d'un rectangle et imprimez la sortie suivante : périmètre, aire, diagonale.

let base = 8;
let hauter = 3;
let perimetre = 2*(base + hauter);
let aire = base * hauter;
let diagonale = Math.sqrt(base**2 + hauter**2);

console.log("Périmètre = " + perimetre);
console.log("Aire = " + aire);
console.log("Diagonale = " + diagonale.toFixed(2));