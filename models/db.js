/**
 @file models/db.js
 @author Anthony
 @date 2026-10-20
 @brief Fournit la connexion MySQL aux routes.
 **/
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'PaysG20'
});
module.exports = connection; // C1 : une seule connexion MySQL pour toutes les routes
