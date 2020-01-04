import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformativoPageRoutingModule } from './informativo-routing.module';

import { InformativoPage } from './informativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformativoPageRoutingModule
  ],
  declarations: [InformativoPage]
})
export class InformativoPageModule {}
