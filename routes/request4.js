/**
 @file routes/request4.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche les pays selon leur statut de visite et leurs indicateurs.
 **/
const express = require('express');
const router = express.Router();
const connection = require('../models/db'); // C1 : connexion MySQL partagée

router.get('/', (req, res) => {

    connection.query("SELECT * FROM caracpays WHERE (dejaVisite='N' and (PIB IS NULL or DensitePop<50)) or dejaVisite='O' and NbHab<50000000", (err, pays) => {

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