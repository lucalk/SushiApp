import { EventEmitter, Injectable, Output } from '@angular/core';
import { AddPanierService } from './add-panier.service';
import { Commande } from '../models/Commande';
import { Panier } from '../models/Panier';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  // Déclare un tableau pour stocker les commandes
  lesCommandes: any[] = [];

  // Constructeur de la classe
  constructor(private panierService: AddPanierService) {
    // Initialise lesCommandes en récupérant les données du localStorage s'il existe, sinon initialise à un tableau vide
    this.lesCommandes = JSON.parse(localStorage.getItem("commande") ?? "[]");
  }

  // Méthode pour ajouter une commande
  addCommande(numC: number, total: number, com: Panier) {
    // Crée une instance de Commande avec le numéro de commande, le total et les détails de la commande
    let commande = new Commande(numC, total, com);
    // Ajoute la commande au tableau lesCommandes
    this.lesCommandes.push(commande);
    // Met à jour lesCommandes dans le localStorage
    localStorage.setItem('commande', JSON.stringify(this.lesCommandes));
    // Affiche lesCommandes dans la console à des fins de débogage
    console.log(this.lesCommandes);
  }

  // Méthode pour obtenir les commandes
  getCommande() {
    return this.lesCommandes;
  }

  // Méthode pour supprimer l'historique des commandes
  deleteHist() {
    // Supprime la clé 'commande' du localStorage
    localStorage.removeItem('commande');
    // Réinitialise le tableau lesCommandes
    this.lesCommandes = [];
    // Recharge la page pour refléter les modifications
    location.reload();
  }
}

