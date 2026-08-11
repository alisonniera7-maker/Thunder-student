const pool = require('../config/db');

async function findAll() {
  const result = await pool.query('SELECT * FROM etudiants ORDER BY id ASC');
  return result.rows;
}

async function findById(id) {
  const result = await pool.query('SELECT * FROM etudiants WHERE id = $1', [id]);
  return result.rows[0] || null;
}

async function create({ nom, prenom, email, date_naissance }) {
  const result = await pool.query(
    `INSERT INTO etudiants (nom, prenom, email, date_naissance)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [nom, prenom, email, date_naissance || null]
  );
  return result.rows[0];
}

async function update(id, { nom, prenom, email, date_naissance }) {
  const result = await pool.query(
    `UPDATE etudiants
     SET nom = $1, prenom = $2, email = $3, date_naissance = $4
     WHERE id = $5
     RETURNING *`,
    [nom, prenom, email, date_naissance || null, id]
  );
  return result.rows[0] || null;
}

async function remove(id) {
  const result = await pool.query('DELETE FROM etudiants WHERE id = $1 RETURNING *', [id]);
  return result.rows[0] || null;
}

module.exports = { findAll, findById, create, update, remove };
