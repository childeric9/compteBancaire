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

// Ajoute 3 comptes bancaires à la liste
listeComptes.push(new CompteBancaire("Alex"));
listeComptes.push(new CompteBancaire("Clovis"));
listeComptes.push(new CompteBancaire("Marco"));
