// Trouvé sur MDN : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).

// function getRandomIntInclusive(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min +1)) + min;
//  }
//  console.log(getRandomIntInclusive);


let prixArticle = 50; // TODO: Nombre aléatoire
let justePrix = false;

let nom = prompt("Comment t\'appelles-tu  : ");

alert("Bienvenue dans le jeu du juste prix " + nom + " 😀");

alert("Tu dois deviner combien coûte l'article")


let prixChoisi = -1;
 
while(justePrix == false){
    prixChoisi = prompt("Combien penses-tu que coûte un jeu de switch ?");
    prixChoisi = parseInt(prixChoisi);
 
    if(prixChoisi == prixArticle){
        justePrix = true;
        // Féliciter le joueur
        alert("Bravo " + nom + " tu as trouvé le juste prix 👏");
    }
    if(prixChoisi < prixArticle){
        alert("C\'est plus cher ⬆️!");
    }
    if(prixChoisi > prixArticle){
        alert("C\'est moins cher ⬇️!");
    }
    //Vérifier que l'utilisateur a bien renseigné un nombre
    if(isNaN(prixChoisi)){
        alert("Ce n\'est pas un nombre!");
    }
    console.log(prixChoisi);
}



