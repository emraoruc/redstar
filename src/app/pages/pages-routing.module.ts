// pages-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OperationComponent } from './operation/operation.component';
import { MedicalComponent } from './medical/medical.component';
import { WmsComponent } from './wms/wms.component';
import { PurchaseComponent } from './purchase/purchase.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'operation', component: OperationComponent },
  { path: 'wms', component: WmsComponent },
  { path: 'medical', component: MedicalComponent },
  { path: 'purchase', component: PurchaseComponent }
  // Diğer rotalar buraya eklenecek
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}