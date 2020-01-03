import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    /*  this.contarTres().then(
       (mensaje) => console.log('Finalizo', mensaje),
       (err) => console.log('Error', err)
     ); */

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    const promesa = new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
    return;
  }
}
