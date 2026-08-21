class Etudiant {
  constructor({ id, nom, prenom, email, date_naissance }) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.date_naissance = date_naissance;
  }
  static validate(data) {
    const erreurs = [];
    if (!data.nom) erreurs.push('Le nom est obligatoire.');
    if (!data.prenom) erreurs.push('Le prenom est obligatoire.');
    if (!data.email) erreurs.push("L'email est obligatoire.");
    return erreurs;
  }
}
export default Etudiant;
