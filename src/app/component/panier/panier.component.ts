import { Component, EventEmitter, Output } from '@angular/core';
import { Box } from '../../models/Box';

import { AddPanierService } from '../../service/add-panier.service';
import { CommandeService } from '../../service/commande.service';
import { Panier } from '../../models/Panier';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})

export class PanierComponent {
  // Déclare un tableau pour stocker les éléments du panier
  monPanier: any = [];
  // Initialise total à 0
  total: any = 0;
  // Initialise numCommande à 0
  numCommande: number = 0;

  // Constructeur de la classe
  constructor(private panierService: AddPanierService, private commandeService: CommandeService) {
    // Crée un numéro de commande
    this.numCommande = this.createNum();
    // Initialise monPanier en récupérant les données du panier à partir du service panierService
    this.monPanier = this.panierService.getPanier();
  }

  // Méthode pour créer un nouveau panier
  nvPanier() {
    // Réinitialise le tableau monPanier
    this.monPanier = [];
    // Efface toutes les données du localStorage
    localStorage.clear();
    // Recharge la page pour refléter les modifications
    location.reload();
  }

  // Méthode pour calculer le total du panier
  getResult(): number {
    let result = 0;
    // Parcourt le panier et calcule le total en multipliant la quantité par le prix de chaque boîte
    for (let box of this.monPanier) {
      result += box.quantite * box.box.prix;
    }
    return result;
  }

  // Méthode pour ajouter une boîte au panier
  add(box: Box) {
    this.panierService.addBox(box, 1);
  }

  // Méthode pour retirer une boîte du panier
  delete(box: Box) {
    this.panierService.dBox(box, 1);
  }

  // Méthode pour effacer une boîte du panier
  effacer(box: Box) {
    this.panierService.trash(box, 1);
  }

  // Méthode pour créer un numéro de commande
  createNum(): number {
    // Appelle la méthode getNumCom du service panierService pour obtenir un numéro de commande aléatoire
    let numC = this.panierService.getNumCom();
    return numC;
  }

  // Méthode pour obtenir le numéro de commande
  getNum() {
    return this.numCommande;
  }

  // Méthode pour confirmer la commande
  confirme(prix: number, commande: Panier) {
    // Ajoute la commande avec le numéro de commande, le total et les détails de la commande
    this.commandeService.addCommande(this.numCommande, prix, commande);
    // Réinitialise le panier
    this.panierService.resetPanier();
    // Réinitialise monPanier
    this.monPanier = [];
  }
}

