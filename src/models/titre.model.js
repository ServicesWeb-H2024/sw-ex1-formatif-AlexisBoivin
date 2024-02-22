/**
 * Le modèle s'occupe de la demande à la base de donnée.
 */
const sql = require("../config/db.js");

const Titre = (titre) => {

   this.show_id = titre.show_id;
   this.title = titre.title;

};

Titre.afficherTitre = (type_title) => {
    return new Promise((resolve, reject) => {
        const requete = "SELECT show_id, title FROM netflix_titles WHERE show_type = ?";
        const params = [type_title];

        sql.query(requete, params, (erreur, resultat) => {
            if(erreur){
                reject(erreur);
            }
            resolve(resultat);
        })
    })
}

module.exports = Titre;