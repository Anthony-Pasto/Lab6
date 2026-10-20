/**
 @file routes/index.js
 @author Anthony
 @date 2026-10-20
 @brief Affiche la page d'accueil.
 **/
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.render('pages/index', { title: 'Accueil' }));
module.exports = router;
