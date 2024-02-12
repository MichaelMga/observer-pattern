
class Sujet {

    constructor(){
        this.observeurs = [];
    }
  
    ajouterObserveur(observeur){
        this.observeurs.push(observeur);
    }

    supprimerObserveur(observeur){
        // boucle sur l'array observeurs, supprime l'observeur
    }

    notifierObserveurs(info){
        this.observeurs.forEach(
            (observeur) => observeur.mettreAjour(info)
        )
    }
}


class Observeur {     
    mettreAjour(info){
        this.info = info;
        console.log(`Je viens d'être notifié de l'info suivante : ${info}`);
    }
}


const serveur = new Sujet();

const telephone = new Observeur();

serveur.ajouterObserveur(telephone);

serveur.notifierObserveurs('le serveur a été mis à jour');