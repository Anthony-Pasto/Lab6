/**
 @file routes/delete.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche les pays et traite leur suppression par nom.
 **/
const express = require('express');
const router = express.Router();
const connection = require('../models/db'); // C1 : connexion MySQL partagée

router.get('/', (req, res) => {
    connection.query('SELECT * FROM caracpays', (err, pays) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur de base de données');
        }



        res.render('pages/delete', { // D3 : nom du fichier corriger
            title: 'suprimer un pays',
            pays: pays,
            erreur: req.query.erreur === '1' // B3 : indique si aucun pays n'a été trouvé
        });
    });
});

router.post('/', express.urlencoded({ extended: false }), (req, res) => {
    const { Pays } = req.body;
    const values = [Pays];

    connection.query(
        'DELETE FROM caracpays WHERE Pays = ?',
        values,
        (err, resultat) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Impossible de supprimer ce pays de la base de données.");
            }
            if (resultat.affectedRows === 0) return res.redirect('/delete?erreur=1'); // B3 : pays inexistant
            res.redirect('/delete');
        }
    );
});

module.exports = router;