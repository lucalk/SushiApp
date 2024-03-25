import { Component,OnInit } from '@angular/core';
import { LookupBoxService } from '../../service/lookup-box.service';
import { AddPanierService } from '../../service/add-panier.service';
import { Box } from '../../models/Box';


@Component({
  selector: 'app-boxes-list',
  templateUrl: './boxes-list.component.html',
  styleUrl: './boxes-list.component.css'
})
export class BoxesListComponent implements OnInit{
  boxes: any[]=[];

  constructor(private lookupBoxes: LookupBoxService,private panierService:AddPanierService){

  }

  ngOnInit():void{
    this.lookupBoxes.getBoxes().subscribe((data)=>{
      this.boxes = data;
    })
  }
  
  localS(box:Box):void{
    this.panierService.addBox(box,1)
  }
  localM(box:Box):void{
    this.panierService.dBox(box,1)
  }

}
