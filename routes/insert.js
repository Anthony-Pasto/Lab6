/**
 @file routes/insert.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche le formulaire et ajoute un pays dans la base de donnees.
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
    connection.query('SELECT * FROM caracpays', (err, pays) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur de base de données');
        }

        const prochainID = pays.reduce((maximum, paysActuel) => {
            return Math.max(maximum, Number(paysActuel.id));
        }, 0) + 1;

        res.render('pages/insert', {
            title: 'ajouter un nouveau pays',
            pays: pays,
            prochainID: prochainID
        });
    });
});

router.post('/', express.urlencoded({ extended: false }), (req, res) => {
    const { ID, Pays, Capitale, NbHab, PIB, DensitePop, dejaVisite, Commentaires } = req.body;
    const values = [ID, Pays, Capitale, NbHab, PIB, DensitePop, dejaVisite, Commentaires || null];

    connection.query(
        'INSERT INTO caracpays (ID, Pays, Capitale, NbHab, PIB, DensitePop, dejaVisite, Commentaires) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        values,
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Impossible d'ajouter ce pays à la base de données.");
            }
            res.redirect('/insert');
        }
    );
});

module.exports = router;