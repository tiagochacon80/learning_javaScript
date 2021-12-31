let date = 311221;
let jour = 0;
let mois = 0;
let annee = 0;

jour = parseInt(date / 10000);
mois = parseInt(date % 10000 / 100);
annee = parseInt(date % 100);

console.log("La date du " + jour);
console.log("Le mois " + mois);
console.log("Année " + annee);