/**
 @file routes/delet.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche les pays et traite leur suppression par nom.
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



        res.render('pages/delet', {
            title: 'suprimer un pays',
            pays: pays
        });
    });
});

router.post('/', express.urlencoded({ extended: false }), (req, res) => {
    const { Pays } = req.body;
    const values = [Pays];

    connection.query(
        'DELETE FROM caracpays WHERE Pays = ?',
        values,
        (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Impossible de supprimer ce pays de la base de données.");
            }
            res.redirect('/delete');
        }
    );
});

module.exports = router;