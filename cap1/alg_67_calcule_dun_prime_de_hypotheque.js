//Calculez le montant d'un paiement en souffrance à l'aide de la formule :
//versement = valeur + (valeur*(taux/100)*temps).

let montant = 636;
let temps = 6; //nombre de mois en retatrd de paiement
let taux = 1.89;

let versement = montant + (montant * (taux/100) * temps);

console.log("Montant versement ");