// pages.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { PagesRoutingModule } from './pages-routing.module';
import { OperationComponent } from './operation/operation.component';
import { WmsComponent } from './wms/wms.component';
import { MedicalComponent } from './medical/medical.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent,
    OperationComponent,
    WmsComponent,
    MedicalComponent,
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    PagesRoutingModule
  ]
})
export class PagesModule {}
