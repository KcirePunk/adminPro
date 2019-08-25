import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor(
    public _ajuste: SettingsService
  ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any){
    this.aplicarCheck(link);
    this._ajuste.aplicarTema(tema);
  }

  aplicarCheck(link: any){
    let selectores:any = document.getElementsByClassName('selector');

    for(let res of selectores){
      res.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajuste.ajustes.tema;

    for(let ref of selectores){
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working'); 
        break;
      }    
    }

  }
}
