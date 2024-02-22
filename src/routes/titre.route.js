/**
 * Dirige la requête vers le bon controller.
 */
const express = require('express');

const router = express.Router();

const titrecontroller = require('../controller/titre.controller.js');

router.get('/:type_title', (req, res) => {
    titrecontroller.afficherTitre(req, res);
})

module.exports = router;