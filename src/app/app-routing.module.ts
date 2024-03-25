import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './component/accueil/accueil.component';
import { DetailComponent } from './component/detail/detail.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PanierComponent } from './component/panier/panier.component';
import { HistoriqueComponent } from './component/historique/historique.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'detail/:id',component:DetailComponent },
  {path:'RGPD', component:RgpdComponent},
  {path:'panier',component:PanierComponent},
  {path:'historique',component:HistoriqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
