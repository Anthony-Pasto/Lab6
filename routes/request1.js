/**
 @file routes/request1.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche les pays de plus de 100 millions d'habitants et de forte densite.
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
        connection.query( 'SELECT * FROM caracpays WHERE NbHab>100000000 AND DensitePop>100', (err, pays) => {
        
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