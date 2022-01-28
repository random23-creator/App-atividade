import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: 'pages/perfil', icon: 'person' },
    { title: 'Conhecimentos', url: 'pages/conhecimento', icon: 'paper-plane' },
    { title: 'Minhas cores', url: 'pages/cores', icon: 'heart' },
    
  ];
  
}
