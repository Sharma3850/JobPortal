import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobtestPageRoutingModule } from './jobtest-routing.module';

import { JobtestPage } from './jobtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobtestPageRoutingModule
  ],
  declarations: [JobtestPage]
})
export class JobtestPageModule {}
