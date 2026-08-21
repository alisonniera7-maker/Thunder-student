const etudiantService = require('../services/etudiantService');

async function getAll(req, res) {
  try {
    const etudiants = await etudiantService.getAllEtudiants();
    res.status(200).json(etudiants);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getById(req, res) {
  try {
    const etudiant = await etudiantService.getEtudiantById(req.params.id);
    res.status(200).json(etudiant);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function create(req, res) {
  try {
    const nouvelEtudiant = await etudiantService.createEtudiant(req.body);
    res.status(201).json(nouvelEtudiant);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function update(req, res) {
  try {
    const etudiantMisAJour = await etudiantService.updateEtudiant(req.params.id, req.body);
    res.status(200).json(etudiantMisAJour);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function remove(req, res) {
  try {
    await etudiantService.deleteEtudiant(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

module.exports = { getAll, getById, create, update, remove };
