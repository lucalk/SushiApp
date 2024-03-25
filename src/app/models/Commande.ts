import { Panier } from "./Panier";
import { iCommande } from "./iCommande";

export class Commande implements iCommande{
    constructor(
        public numC:number,
        public prix:number,
        public laCommande:Panier
    ){}
}