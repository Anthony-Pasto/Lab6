/**
 @file routes/request2.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche les pays visites avec un PIB ou une population eleves.
 **/
const express = require('express');
const router = express.Router();
const connection = require('../models/db'); // C1 : connexion MySQL partagée

router.get('/', (req, res) => {

    connection.query("SELECT * FROM caracpays WHERE dejaVisite='O' AND (PIB>2000 OR NbHab> 300000000)", (err, pays) => {

        if (err) {
            console.error(err);
            return res.status(500).send('Erreur de base de données');
        }

        res.render('pages/pays', {
            title: 'Liste des pays du G20',
            pays: pays
        });
    });
});

module.exports = router;