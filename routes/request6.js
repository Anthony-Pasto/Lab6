/**
 @file routes/request6.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche le pays avec la plus petite population positive.
 **/
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'PaysG20'
});

router.get('/', (req, res) => {

    connection.query('SELECT * FROM caracpays WHERE NbHab > 1 ORDER BY NbHab LIMIT 1', (err, pays) => {

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