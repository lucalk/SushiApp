import { Component } from '@angular/core';

// obtenir l'id de la route
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LookupBoxService } from '../../service/lookup-box.service';
import { AddPanierService } from '../../service/add-panier.service';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // Déclare une variable boxes pour stocker les données des boîtes
  boxes: any;
  // Initialise boxId avec une chaîne vide
  boxId: string = '';
  // Initialise box avec un objet contenant un champ saveurs vide par défaut
  box: any = { saveurs: '' };
  // Initialise lid avec une chaîne vide
  lid: string = '';

  // Constructeur de la classe
  constructor(private route: ActivatedRoute, private lookupBoxes: LookupBoxService, private addPanier: AddPanierService) { }

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    // Appelle le service lookupBoxes pour obtenir les données des boîtes
    // Une fois les données récupérées, les assigne à la variable boxes
    this.lookupBoxes.getBoxes().subscribe((data) => {
      this.boxes = data;
    })

    // Souscrit aux paramètres de l'URL
    this.route.params.subscribe(params => {
      // Récupère l'ID de la boîte à partir des paramètres de l'URL
      this.boxId = params['id'];
      // Affiche l'ID de la boîte dans la console à des fins de débogage
      console.log(this.boxId);
    })
  }

  // Méthode pour ajouter une boîte au panier
  localS(box: Box): void {
    this.addPanier.addBox(box, 1);
  }

  // Méthode pour retirer une boîte du panier
  localD(box: Box): void {
    this.addPanier.dBox(box, 1);
  }
}







