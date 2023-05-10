let voitureModule = (function() {
   
  let modele = "Non défini";
  let marque = "Non défini";
  let annee = "Non défini";

  function afficherDetails() {
      console.log("Modèle: " + modele + ", Marque: " + marque + ", Année: " + annee);
  }

  return {
      setModele: function(nouveauModele) {
          modele = nouveauModele;
      },
      setMarque: function(nouvelleMarque) {
          marque = nouvelleMarque;
      },
      setAnnee: function(nouvelleAnnee) {
          annee = nouvelleAnnee;
      },
      afficherDetails: afficherDetails
  };
})();

let voitureAdapter = {
  setModel: voitureModule.setModele,
  setBrand: voitureModule.setMarque,
  setYear: voitureModule.setAnnee,
  showDetails: voitureModule.afficherDetails
};

voitureAdapter.setModel("208");
voitureAdapter.setBrand("Peugeot");
voitureAdapter.setYear(2021);
voitureAdapter.showDetails('Une voiture fait pour vous'); 