/**
 * Controller fait la gestion des erreurs possible.
 */

const modelTitre = require('../models/titre.model');

exports.afficherTitre = (req, res) => {
    if(!req.query.page){
        req.query.page = 1;
    }
    else if(req.query.page < 1){
        res.status(410);
        res.send({
            message:"Le numéro de page doit être égale ou supérieur à 1."
        });
    }
    else if(!req.query.page.isInteger()){
        res.status(411);
        res.send({
            message:"Le numéro de page doit être un chiffre."
        })
    }
    if(req.params.type_title != "film" || req.params.type_title != "serie"){
        res.status(400);
        res.send({
            message: "Le type " + req.params.type_title + " est invalide."
        });
        return;
    }

    modelTitre.afficherTitre(req.params.type_title)

    .then((titres) => {
        if(!titres[0]){
            res.status(404);
            res.send({
                message: "Il ne semble pas exister de titre avec ce type."
            });
            return;
        }
        res.send(titres.slice(req.query.page * 10 - 10, req.query.page * 10));
        
    })

    .catch((erreur) => {
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la récupération des titresde type " + req.params.type_title
        });
    })
}