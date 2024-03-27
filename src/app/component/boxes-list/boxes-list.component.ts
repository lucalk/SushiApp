import { Component, OnInit } from '@angular/core';
import { LookupBoxService } from '../../service/lookup-box.service';
import { AddPanierService } from '../../service/add-panier.service';
import { Box } from '../../models/Box';


@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrl: './boxes-list.component.css'
})
export class BoxesListComponent implements OnInit {
  // Déclare un tableau boxes qui contiendra des éléments de type any
  boxes: any[] = [];


  constructor(private lookupBoxes: LookupBoxService, private panierService: AddPanierService) { }

  // Appel du service lookupBoxes pour récupérer des données
  // Une fois les données récupérées, les assigne à la variable boxes
  ngOnInit(): void {
    this.lookupBoxes.getBoxes().subscribe((data) => {
      this.boxes = data;
    })
  }

  // Méthode pour ajouter une boîte au panier
  localS(box: Box): void {
    this.panierService.addBox(box, 1)
  }

  // Méthode pour retirer une boîte du panier
  localM(box: Box): void {
    this.panierService.dBox(box, 1)
  }
}

