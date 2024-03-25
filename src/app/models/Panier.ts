import { Box } from "./Box";
import { iPanier } from "./iPanier";

export class Panier implements iPanier{
    constructor(
        public box:Box,
        public quantite:number
    ){}
}