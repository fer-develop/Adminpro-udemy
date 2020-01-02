import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document, private settings: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    this.cambiarCheck(link);
    this.settings.aplicarTema(tema);
  }

  cambiarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }


  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');

    const tema = this.settings.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }



  }
}
