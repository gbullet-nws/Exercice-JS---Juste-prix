/*
* VAR
*/
 
let name = 'Maxence'; // String
 
let phrase = 'L\'age de Maxence est..'
 
let phrase2 = "L'age de Maxence est.."
 
const CONFIG = "242-343-343-232"; // String
 
 
let plus18ans = true;
let moins18ans = false;
 
let age = 18; /*
let age = 18.5;
let age = "18";*/
 
let firstname;
 
console.log(firstname)
 
let calcul = 18 / 3;
/*console.log(calcul);
console.info(calcul);
console.error(calcul);
console.warn(calcul);*/
 
/*
* Opérateur de comparaison
*/
 
let carte1 = 11;
let carte2 = 10;
/*
if(carte1 > carte2){
    alert('Joueur 1 a gagné')
} else {
    alert('Joueur 2 a gagné')
}*/
/*
if(carte1 > carte2){
    alert('Joueur 1 a gagné')
} else if(carte2 > carte1){
    alert('Joueur 2 a gagné')
} else if(carte2 == carte1){
    alert('Egalité')
} else {
    alert('Erreur...')
}*/
/*
for(let i = 0; i < 10; i++){
    console.log(i);
}*/
 
let mainJoueur1 = [1, 5, 3, 11, 12, 14, 3];
/*
for(let i = 0; i < mainJoueur1.length; i++){
    console.log('Carte joueur 1', mainJoueur1[i]);
}*/
 
let mainJoueur2 = [9, 2, 3, 12, 12, 10, 2];
 
/*for(let i = 0; i < mainJoueur2.length; i++){
    console.log('J1: ', mainJoueur1[i], 'J2: ', mainJoueur2[i])
}*/
 
 
let resultatMultiplication = multiplication(3, 9);
console.log(resultatMultiplication);
 
let plusUn = ajouterUn(resultatMultiplication);
console.log(plusUn);
 
function multiplication(nb1, nb2){
    return nb1 * nb2;
}
 
function ajouterUn(entree){
    let sortie = entree + 1;
    return sortie;
}
/*
let prenom =  prompt('Quel est ton prénom ? ');
 
alert('Bonjour ' + prenom + ' !');
 
let etat = prompt('La pêche aujourd\'hui ? (répond Oui/Non)');
 
if(etat == 'Oui'){
    alert('Ahhhh top !')
} else if(etat == 'Non'){
    alert('Mince..')
} else {
    alert('Répond par oui ou par non...');
}
*/
 
let _age = prompt('Quel est ton âge ?');
_age = parseInt(_age);
 
if(isNaN(_age)){
    alert('Renseigne un nombre...')
}
console.log(_age);
 
const KEY = '132432323231231';
let KEY = '132432323231231';