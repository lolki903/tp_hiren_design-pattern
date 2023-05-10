class Client {
  constructor(nom) {
    this.nom = nom;
  }
  notifier(produit) {
    console.log(
      `Le client ${this.nom} a été notifié d'un nouveau produit : ${produit}`
    );
  }
}

class Magasin {
  constructor() {
    this.produits = [];
    this.clients = [];
  }

  notifierClients(produit) {
    this.clients.forEach((client) => client.notifier(produit));
  }
  addProduit(produit) {
    this.produits.push(produit);
    this.notifierClients(produit);
  }

  addClient(client) {
    this.clients.push(client);
  }

  removeClient(client) {
    const index = this.clients.indexOf(client);
    if (index !== -1) {
      this.clients.splice(index, 1);
    }
  }
}
const magasin = new Magasin();

const client1 = new Client("John Does");
magasin.addClient(client1);

const client2 = new Client("Bob");
magasin.addClient(client2);

magasin.addProduit("Pull");

magasin.removeClient(client1);

magasin.addProduit("Chaussures");
