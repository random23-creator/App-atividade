import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/perfil',
    pathMatch: 'full'
  },
  {
    path: 'pages/perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'pages/conhecimento',
    loadChildren: () => import('./pages/conhecimento/conhecimento.module').then( m => m.ConhecimentoPageModule)
  },
  {
    path: 'pages/cores',
    loadChildren: () => import('./pages/cores/cores.module').then( m => m.CoresPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
