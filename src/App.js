const express = require('express');
const cors = require('cors');
require('dotenv').config();
const etudiantController = require('./controllers/etudiantController');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/etudiants', etudiantController.getAll);
app.get('/etudiants/:id', etudiantController.getById);
app.post('/etudiants', etudiantController.create);
app.put('/etudiants/:id', etudiantController.update);
app.delete('/etudiants/:id', etudiantController.remove);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
