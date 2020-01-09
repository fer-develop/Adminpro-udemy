import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(public _usuarioService: UsuarioService) {

  }
  canActivate(): boolean {
    if (this._usuarioService.estaLogueado()) {
      console.log("paso guard");
      return true;
    } else {
      console.log("bloqueado");
      return false;
    }

  }

}
