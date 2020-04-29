/*
Définir prixArticle, un nombre aléatoire entre 0 et 100
Demander à l’utilisateur son nom
Demander à l’utilisateur quel est le prix du produit
Tant que le prix n’est pas le meme
    Lui dire si c’est plus
    Lui dire si c’est moins
Féliciter le joueur si le prix est le bon
Indice: “tant que” = boucle while en javascript
*/
 
/*
    TODO: Demander la difficulté choisie
    FACILE > 0 - 10
    MOYEN > 0 - 100
    DIFFICILE > 0 - 1000
    HARDCODE > 0,00 - 100,00
*/

let min = 0;
let max = 100;

let prixArticle = Math.floor(100*Math.random());
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