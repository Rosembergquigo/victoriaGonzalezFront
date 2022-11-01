import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { EncryptService } from 'src/app/services/encrypt.service';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  cedula : string = '';
  contrasena : string = '';
  public usuario! : Usuario;
  constructor(
    private _usuarioService : UsuarioService,
    private _encrypt: EncryptService,
    private _apiStorage : StorageService,
    private _router : Router
  ) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login (){
    this.usuario.cedula = this.cedula;
    this.usuario.contrasena = this._encrypt.encypt(this.contrasena)
    console.log(this.usuario)
    this._usuarioService.login(this.usuario).subscribe(user => {
        console.log('getUser: ', user)
        this._apiStorage.usuarioSesion(user)
        this.usuario = this._apiStorage.getUsuario
        this._usuarioService.getTokenSession(user.cedula).subscribe(token => {
          this._apiStorage.tokenSession(token)
        });
        
        this._router.navigate(['dash'])

        Swal.fire({
          icon:'success',
          title: 'Inicion de Sesion',
          text: `Login Correcto para ${this.usuario.nombres}`
        }).then(data => {
          window.location.reload()
        })
        
      },
      error => {
        var errorMessage = <any>error;
           if (errorMessage != null) {
             Swal.fire('error', 'Falla en la autenticatición, Por favor Revise sus credenciales', error)
           }
      }
    )
  }
}
