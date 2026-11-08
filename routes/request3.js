/**
 @file routes/request3.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche les pays dont le nom commence par A et la capitale contient a.
 **/
const express = require('express');
const router = express.Router();
const connection = require('../models/db'); // C1 : connexion MySQL partagée

router.get('/', (req, res) => {

    connection.query('SELECT * FROM caracpays WHERE Capitale LIKE "%a%" and Pays LIKE "A%"', (err, pays) => {

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