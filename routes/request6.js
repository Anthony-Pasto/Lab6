/**
 @file routes/request6.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche le pays avec la plus petite population connue.
 **/
const express = require('express');
const router = express.Router();
const connection = require('../models/db'); // C1 : connexion MySQL partagée

router.get('/', (req, res) => {

    // A13 : chercher la plus petite population connue
    connection.query('SELECT * FROM caracpays WHERE NbHab IS NOT NULL ORDER BY NbHab ASC LIMIT 1', (err, pays) => {

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