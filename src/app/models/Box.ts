import { iBox } from "./iBox";

export class Box implements iBox{
    constructor(
        public id:number,
        public pieces:number,
        public nom:string,
        public image:string,
        public prix:number,
        public saveurs:Array<string>,
        public aliments:Array<Iterable<string>>
    ){}
}