import { EventEmitter, Injectable, Output } from '@angular/core';
import { Panier } from '../models/Panier';
import { Box } from '../models/Box';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPanierService {

lid:string=''
monPanier:any=[]
tabPrix:any=[]

  constructor() { 
    this.monPanier = JSON.parse(localStorage.getItem("panier") ?? "[]")
  }


  addBox(laBox:Box,quantite:number){ 
    let panier = new Panier(laBox,quantite)
    for (let box of this.monPanier){
      if(box.box.id == panier.box.id){
        box.quantite++
        localStorage.setItem('panier',JSON.stringify(this.monPanier))
        return
      }
    }
    this.monPanier.push(panier)
    localStorage.setItem('panier',JSON.stringify(this.monPanier))
  }

  dBox(laBox:Box,quantite:number){ 
    let panier = new Panier(laBox,quantite)
    for (let i = 0; i < this.monPanier.length;i++){
      let box =this.monPanier[i]
      if(box.box.id == panier.box.id){
        if(box.quantite > 0){
          box.quantite--
        }else if(box.quantite == 0) {
        this.monPanier.splice(i,1)
        localStorage.setItem('panier',JSON.stringify(this.monPanier))
        return
        }
      }
    }
    localStorage.setItem('panier',JSON.stringify(this.monPanier))
  }

  trash(laBox:Box,quantite:number){
    let panier = new Panier(laBox,quantite)
    for (let i = 0; i < this.monPanier.length;i++){
      let box =this.monPanier[i]
      if(box.box.id == panier.box.id){
        this.monPanier.splice(i,1)
        localStorage.setItem('panier',JSON.stringify(this.monPanier))
        return
        }
      }
    }

  getNumCom(){
    return Math.floor(Math.random() * (999999999 - 111111111 + 1)) + 111111111
    }
      
  getPanier(){
    return this.monPanier
  }

  getResult():number{
    let result = 0
    for( let box of this.monPanier){
      result += box.quantite * box.box.prix
    }
    return result
  }

  resetPanier(){
    localStorage.setItem("panier","[]")
    this.monPanier=[]
  }

}
