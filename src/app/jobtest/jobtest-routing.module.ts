import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobtestPage } from './jobtest.page';

const routes: Routes = [
  {
    path: '',
    component: JobtestPage
  },
  {
    path: ':id',
    component: JobtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobtestPageRoutingModule {}
