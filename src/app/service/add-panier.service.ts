import { EventEmitter, Injectable, Output } from '@angular/core';
import { Panier } from '../models/Panier';
import { Box } from '../models/Box';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPanierService {
  // Déclare une variable pour stocker l'identifiant
  lid: string = ''

  // Déclare un tableau pour stocker les éléments du panier
  monPanier: any = []

  // Déclare un tableau pour stocker les prix
  tabPrix: any = []

  constructor() {
    this.monPanier = JSON.parse(localStorage.getItem("panier") ?? "[]")
  }

  // Méthode pour ajouter une boîte au panier
  addBox(laBox: Box, quantite: number) {
    // Crée une instance de Panier avec la boîte et la quantité spécifiées
    let panier = new Panier(laBox, quantite);
    // Parcourt le panier
    for (let box of this.monPanier) {
      // Vérifie si la boîte est déjà présente dans le panier
      if (box.box.id == panier.box.id) {
        // Si oui, incrémente la quantité
        box.quantite++;
        // Met à jour le panier dans le localStorage
        localStorage.setItem('panier', JSON.stringify(this.monPanier));
        return; // Sort de la fonction
      }
    }
    // Si la boîte n'est pas déjà dans le panier, l'ajoute au panier
    this.monPanier.push(panier);
    // Met à jour le panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(this.monPanier));
  }

  // Méthode pour retirer une boîte du panier
  dBox(laBox: Box, quantite: number) {
    // Crée une instance de Panier avec la boîte et la quantité spécifiées
    let panier = new Panier(laBox, quantite);
    // Parcourt le panier
    for (let i = 0; i < this.monPanier.length; i++) {
      let box = this.monPanier[i];
      // Vérifie si la boîte est présente dans le panier
      if (box.box.id == panier.box.id) {
        // Vérifie si la quantité de la boîte est supérieure à 0
        if (box.quantite > 0) {
          // Si oui, décrémente la quantité
          box.quantite--;
        } else if (box.quantite == 0) {
          // Si la quantité est de 0, retire la boîte du panier
          this.monPanier.splice(i, 1);
          // Met à jour le panier dans le localStorage
          localStorage.setItem('panier', JSON.stringify(this.monPanier));
          return; // Sort de la fonction
        }
      }
    }
    // Met à jour le panier dans le localStorage
    localStorage.setItem('panier', JSON.stringify(this.monPanier));
  }

  // Méthode pour supprimer une boîte du panier
  trash(laBox: Box, quantite: number) {
    // Crée une instance de Panier avec la boîte et la quantité spécifiées
    let panier = new Panier(laBox, quantite);
    // Parcourt le panier
    for (let i = 0; i < this.monPanier.length; i++) {
      let box = this.monPanier[i];
      // Vérifie si la boîte est présente dans le panier
      if (box.box.id == panier.box.id) {
        // Si oui, supprime la boîte du panier
        this.monPanier.splice(i, 1);
        // Met à jour le panier dans le localStorage
        localStorage.setItem('panier', JSON.stringify(this.monPanier));
        return; // Sort de la fonction
      }
    }
  }

  // Méthode pour générer un numéro de commande aléatoire
  getNumCom() {
    return Math.floor(Math.random() * (999999999 - 111111111 + 1)) + 111111111;
  }

  // Méthode pour obtenir le contenu actuel du panier
  getPanier() {
    return this.monPanier;
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

  // Méthode pour réinitialiser le panier
  resetPanier() {
    // Réinitialise le panier dans le localStorage et en mémoire
    localStorage.setItem("panier", "[]");
    this.monPanier = [];
  }
}
