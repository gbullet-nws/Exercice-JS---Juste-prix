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

let nom = prompt("Salut, comment t\'appelles-tu  : ");

alert("Bienvenue dans le jeu du Nombre Mystère " + nom + " 😀");

alert("Tu dois deviner le nombre mystère si tu ne t\'y attendais pas ! ");

alert("Choisis ta difficulté en écrivant le numéro associé : FACILE(1) - NORMAL(2) - DIFFICILE(3) - HARDCORE(4)");

let difficulte = false;

let difficulteFacile = 1;
let difficulteMoyenne = 2;
let difficulteDifficile = 3;
let difficulteHardcore = 4;

let choixDifficulte = 0;

while(difficulte == false){
    choixDifficulte = prompt("FACILE(1) - NORMAL(2) - DIFFICILE(3) - HARDCORE(4) : ");
    choixDifficulte = parseInt(choixDifficulte);

    // Difficulté Facile
    if(choixDifficulte == difficulteFacile){
        difficulte = true;
        //Lancement du mode Facile
        alert("Début de la partie " + nom + ", prépare toi !");
        //Règles
        alert("Tu dois trouver le chiffre ou nombre mystérieux situé entre 0 et 10");
        // Nombre Mystérieux aléatoire
        let nombreMysterieux = Math.floor(10*Math.random());
        // variables de la boucle
        let nombreJuste = false;
        let nombreChoisi = -1;
        //Boucle contenant le (jeu)
        while(nombreJuste == false){
            nombreChoisi = prompt("Quel est le Nombre Mystérieux d'après toi ?");
            nombreChoisi = parseInt(nombreChoisi);
        
            if(nombreChoisi == nombreMysterieux){
                nombreJuste = true;
                // Féliciter le joueur
                alert("Bravo " + nom + " tu as trouvé le Nombre Mystérieux 👏");
            }
            if(nombreChoisi < nombreMysterieux){
                alert("C\'est plus ⬆️!");
            }
            if(nombreChoisi > nombreMysterieux){
                alert("C\'est moins ⬇️!");
            }
            //Vérifier que l'utilisateur a bien renseigné un nombre
            if(isNaN(nombreChoisi)){
                alert("Ce n\'est pas un nombre!");
            }
            console.log(nombreChoisi);
        }
    }

    // Difficulté Moyenne
    if(choixDifficulte == difficulteMoyenne){
        difficulte = true;
        //Lancement du mode Facile
        alert("Début de la partie " + nom + ", prépare toi !");
        //Règles
        alert("Tu dois trouver le chiffre ou nombre mystérieux situé entre 0 et 100");
        // Nombre Mystérieux aléatoire
        let nombreMysterieux = Math.floor(100*Math.random());
        // variables de la boucle
        let nombreJuste = false;
        let nombreChoisi = -1;
        //Boucle contenant le (jeu)
        while(nombreJuste == false){
            nombreChoisi = prompt("Quel est le Nombre Mystérieux d'après toi ?");
            nombreChoisi = parseInt(nombreChoisi);
        
            if(nombreChoisi == nombreMysterieux){
                nombreJuste = true;
                // Féliciter le joueur
                alert("Bravo " + nom + " tu as trouvé le Nombre Mystérieux 👏");
            }
            if(nombreChoisi < nombreMysterieux){
                alert("C\'est plus ⬆️!");
            }
            if(nombreChoisi > nombreMysterieux){
                alert("C\'est moins ⬇️!");
            }
            //Vérifier que l'utilisateur a bien renseigné un nombre
            if(isNaN(nombreChoisi)){
                alert("Ce n\'est pas un nombre!");
            }
            console.log(nombreChoisi);
        }
    }

    // Difficulté Difficile
    if(choixDifficulte == difficulteDifficile){
        difficulte = true;
        //Lancement du mode Facile
        alert("Début de la partie " + nom + ", prépare toi !");
        alert("Là c'est plus de la rigolade..")
        //Règles
        alert("Tu dois trouver le chiffre ou nombre mystérieux situé entre 0 et 1000");
        // Nombre Mystérieux aléatoire
        let nombreMysterieux = Math.floor(1000*Math.random());
        // variables de la boucle
        let nombreJuste = false;
        let nombreChoisi = -1;
        //Boucle contenant le (jeu)
        while(nombreJuste == false){
            nombreChoisi = prompt("Quel est le Nombre Mystérieux d'après toi ?");
            nombreChoisi = parseInt(nombreChoisi);
        
            if(nombreChoisi == nombreMysterieux){
                nombreJuste = true;
                // Féliciter le joueur
                alert("Bravo " + nom + " tu as trouvé le Nombre Mystérieux 👏 et en DIFFICILE");
            }
            if(nombreChoisi < nombreMysterieux){
                alert("C\'est plus ⬆️!");
            }
            if(nombreChoisi > nombreMysterieux){
                alert("C\'est moins ⬇️!");
            }
            //Vérifier que l'utilisateur a bien renseigné un nombre
            if(isNaN(nombreChoisi)){
                alert("Ce n\'est pas un nombre!");
            }
            console.log(nombreChoisi);
        }
    }

    // Difficulté Difficile
    if(choixDifficulte == difficulteHardcore){
        difficulte = true;
        //Lancement du mode HARDCORE
        alert("Début de la partie " + nom + ", prépare toi !");
        alert("Toi t'aimes les défis ça c'est sur..")
        //Règles
        alert("Tu dois trouver le chiffre ou nombre mystérieux situé entre 0,00 et 100,00");

        // FONCTIONNE PAS... à refaire


        // Nombre Mystérieux aléatoire
        // formule : (min + (math.random * max)) / min
        let nombreMysterieux = (( 1 + (Math.random() * 100)) / 1);
        // toFixed 2 pour récupérer seulement les deux premières décimales
        let avecDecimales = nombreMysterieux.toFixed(2);

        // variables de la boucle
        let nombreJuste = false;
        let nombreChoisi = -1;
        //Boucle contenant le (jeu)
        while(nombreJuste == false){
            nombreChoisi = prompt("Quel est le Nombre Mystérieux d'après toi ?");
            nombreChoisi = parseInt(nombreChoisi);
        
            if(nombreChoisi == avecDecimales){
                nombreJuste = true;
                // Féliciter le joueur
                alert("Bravo " + nom + " tu as trouvé le Nombre Mystérieux 👏 et en HARD c'est beau");
            }
            if(nombreChoisi < avecDecimales){
                alert("C\'est plus ⬆️!");
            }
            if(nombreChoisi > avecDecimales){
                alert("C\'est moins ⬇️!");
            }
            //Vérifier que l'utilisateur a bien renseigné un nombre
            if(isNaN(nombreChoisi)){
                alert("Ce n\'est pas un nombre!");
            }
            console.log(nombreChoisi);
        }
    }


    //Vérifier que l'utilisateur a bien renseigné un nombre
    if(isNaN(choixDifficulte)){
        alert("Ce n\'est pas un chiffre !");
    }
    console.log(choixDifficulte);
}
