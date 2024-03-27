import { Component } from '@angular/core';

import { CommandeService } from '../../service/commande.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  // Déclare un tableau pour stocker l'historique des commandes
  historique: any = [];

  // Constructeur de la classe
  constructor(private commandeService: CommandeService) {
    // Initialise l'historique en récupérant les données des commandes à partir du service commandeService
    this.historique = this.commandeService.getCommande();
  }

  // Méthode pour supprimer l'historique des commandes
  delete() {
    // Appelle la méthode deleteHist du service commandeService pour supprimer l'historique
    this.commandeService.deleteHist();
  }
}
