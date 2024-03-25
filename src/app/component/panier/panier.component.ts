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
  monPanier:any=[]
  total:any=0
  numCommande:number=0

  
  constructor(private panierService:AddPanierService,private commandeService:CommandeService){
    this.numCommande=this.createNum()
    this.monPanier = this.panierService.getPanier()
  }

  nvPanier(){
    this.monPanier = []
    localStorage.clear()
    location.reload()
  }
  
  getResult():number{
    let result = 0
    for( let box of this.monPanier){
      result += box.quantite * box.box.prix
    }
    return result
  }

  add(box:Box){
    this.panierService.addBox(box,1)
  }
  
  delete(box:Box){
    this.panierService.dBox(box,1)
  }

  effacer(box:Box){
    this.panierService.trash(box,1)

  }

  createNum():number{
    let numC = this.panierService.getNumCom()
    return numC
  }

  getNum(){
    return this.numCommande
  }

  confirme(prix:number,commande:Panier){
    console.log(this.numCommande)
    this.commandeService.addCommande(this.numCommande,prix,commande)  
    this.panierService.resetPanier()
    this.monPanier = []
   
  }
}
