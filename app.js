/**
 @file app.js
 @author Anthony
 @date 2026-10-20
 @brief Configure Express, MySQL, les routes et le demarrage du serveur.
 **/
const express = require('express');
const app = express();
const PORT = 3000;
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'PaysG20'
});

connection.connect(function (err) {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err.message);
    return;
  }
  console.log('Vous êtes connecté à votre BDD...');
});

app.use('/insert', require('./routes/insert'));
app.use('/delete', require('./routes/delet'));
app.use('/pays', require('./routes/pays'));
app.use('/request1', require('./routes/request1'));
app.use('/request2', require('./routes/request2'));
app.use('/request3', require('./routes/request3'));
app.use('/request4', require('./routes/request4'));
app.use('/request5', require('./routes/request5'));
app.use('/request6', require('./routes/request6'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes/index'));
app.use((req, res) => res.status(404).render('pages/404', { title: 'Page introuvable' }));
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).render('error');
});
if (require.main === module) app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
module.exports = { app };
