export interface iBox {
    id:number,
    pieces:number,
    nom:string,
    image:string,
    prix:number,
    saveurs:Array<string>,
    aliments:Array<Iterable<string>>
}