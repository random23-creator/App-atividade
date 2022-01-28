import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoresPage } from './cores.page';

const routes: Routes = [
  {
    path: '',
    component: CoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoresPageRoutingModule {}
