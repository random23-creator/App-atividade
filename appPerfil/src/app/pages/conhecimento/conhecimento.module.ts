import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConhecimentoPageRoutingModule } from './conhecimento-routing.module';

import { ConhecimentoPage } from './conhecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConhecimentoPageRoutingModule
  ],
  declarations: [ConhecimentoPage]
})
export class ConhecimentoPageModule {}
