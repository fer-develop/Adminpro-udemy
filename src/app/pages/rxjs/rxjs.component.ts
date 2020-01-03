import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {
  subscripcion: Subscription;
  constructor() {
    this.subscripcion = this.regresaObservable()
      .subscribe(
        numero => console.log('Serie', numero),
        error => console.log('Error en el Obs', error),
        () => console.log('El observador termino')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("cerrar pagina");
    this.subscripcion.unsubscribe();
  }
  regresaObservable(): Observable<any> {
    return new Observable((observable: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {

        contador++;
        const salida = {
          valor: contador
        };
        observable.next(salida);
        if (contador === 3) {
          //clearInterval(intervalo);
          //observable.complete();
        }

        /* if (contador === 2) {
          // clearInterval(intervalo);
          observable.error('Auxilio!!');
        } */

      }, 1000);
    }).pipe(
      map(resp => {
        return resp.valor;
      }),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
