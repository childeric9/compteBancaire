class CompteBancaire {
  constructor(titulaire) {
    this.titulaire = titulaire;
    this.solde = 0;
  }
  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  }
  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
}

const listeComptes = [];
