import { Component } from '@angular/core';

// obtenir l'id de la route
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LookupBoxService } from '../../service/lookup-box.service';
import { AddPanierService } from '../../service/add-panier.service';
import { Box } from '../../models/Box';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  boxes: any;
  boxId:string='';
  box:any={saveurs:''}

  lid:string='';

  constructor(private route:ActivatedRoute, private lookupBoxes:LookupBoxService, private addPanier:AddPanierService){}

  ngOnInit():void{
    this.lookupBoxes.getBoxes().subscribe((data)=>{
      this.boxes = data;
    })
    this.route.params.subscribe(params =>{
      this.boxId = params['id']
      console.log(this.boxId)
    })
  }

  
  localS(box:Box):void{
    this.addPanier.addBox(box,1)
  }





}






