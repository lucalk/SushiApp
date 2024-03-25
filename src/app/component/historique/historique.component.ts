import { Component } from '@angular/core';

import { CommandeService } from '../../service/commande.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css'
})
export class HistoriqueComponent {
  historique:any=[]


  constructor(private commandeService:CommandeService){
    this.historique = this.commandeService.getCommande()
  }

  delete(){
    this.commandeService.deleteHist()
  }

  

}
