const etudiantRepository = require('../repositories/etudiantRepository');
const Etudiant = require('../models/Etudiant');

async function getAllEtudiants() {
  return etudiantRepository.findAll();
}

async function getEtudiantById(id) {
  const etudiant = await etudiantRepository.findById(id);
  if (!etudiant) {
    const err = new Error(`Étudiant avec l'id ${id} introuvable`);
    err.statusCode = 404;
    throw err;
  }
  return etudiant;
}

async function createEtudiant(data) {
  const erreurs = Etudiant.validate(data);
  if (erreurs.length > 0) {
    const err = new Error(erreurs.join(' '));
    err.statusCode = 400;
    throw err;
  }
  return etudiantRepository.create(data);
}

async function updateEtudiant(id, data) {
  const erreurs = Etudiant.validate(data);
  if (erreurs.length > 0) {
    const err = new Error(erreurs.join(' '));
    err.statusCode = 400;
    throw err;
  }

  const etudiantMisAJour = await etudiantRepository.update(id, data);
  if (!etudiantMisAJour) {
    const err = new Error(`Étudiant avec l'id ${id} introuvable`);
    err.statusCode = 404;
    throw err;
  }
  return etudiantMisAJour;
}

async function deleteEtudiant(id) {
  const etudiantSupprime = await etudiantRepository.remove(id);
  if (!etudiantSupprime) {
    const err = new Error(`Étudiant avec l'id ${id} introuvable`);
    err.statusCode = 404;
    throw err;
  }
  return etudiantSupprime;
}

module.exports = {
  getAllEtudiants,
  getEtudiantById,
  createEtudiant,
  updateEtudiant,
  deleteEtudiant
};
