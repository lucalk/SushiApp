import { Component } from '@angular/core';
import { AddPanierService } from '../../service/add-panier.service';
import { CommandeService } from '../../service/commande.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

 
  constructor(private panierService:AddPanierService,private commandeService:CommandeService){

  }

  getTotal():number{
    return this.panierService.getResult()
    
  }
  
}
