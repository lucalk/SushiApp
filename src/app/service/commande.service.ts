import { EventEmitter, Injectable, Output } from '@angular/core';
import { AddPanierService } from './add-panier.service';
import { Commande } from '../models/Commande';
import { Panier } from '../models/Panier';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

lesCommandes:any=[]

  constructor(private panierService:AddPanierService) { 
    this.lesCommandes = JSON.parse(localStorage.getItem("commande") ?? "[]")
  }


  addCommande(numC:number,total:number,com:Panier){
    let commande = new Commande(numC,total,com)
    this.lesCommandes.push(commande)
    localStorage.setItem('commande',JSON.stringify(this.lesCommandes))
    console.log(this.lesCommandes)
  }

  getCommande(){
    return this.lesCommandes
  }

  deleteHist(){
    localStorage.removeItem('commande')
    this.lesCommandes = []
    location.reload()
  }
}
