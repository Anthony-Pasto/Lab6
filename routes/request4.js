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
   
        connection.query( "SELECT * FROM caracpays WHERE (dejaVisite='N' and (PIB IS NULL or DensitePop<50)) or dejaVisite='O' and NbHab<50000000", (err, pays) => {
        
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