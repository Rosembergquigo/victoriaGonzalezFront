import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenSession } from '../models/tokenSession';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  url = environment.urlApi;
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(
    private _http: HttpClient
  ) { }

  register(usuario: Usuario):Observable<Usuario> {
    return this._http.post<Usuario>(this.url + '/api/usuario', usuario,{headers: this.httpHeaders})
  }

  login(usuario: Usuario):Observable<Usuario>
  {
    return this._http.post<Usuario>(this.url + '/api/usuario/ingreso', usuario,{headers: this.httpHeaders})
  }

  getTokenSession(cedula: string){
    const path = `${this.url}/api/token/gen/${cedula}`
    return this._http.get<TokenSession>(path)
  }
}
