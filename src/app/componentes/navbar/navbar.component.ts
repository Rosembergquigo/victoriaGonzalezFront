import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user : boolean = false;
  constructor(
    public _apiStorage : StorageService,
    public _router : Router
  ) { }

  ngOnInit(
    
  ): void {
    this.user = this._apiStorage.isAuth()
    console.log('init: ', this.user)
  }

  cerrarSesion(){
    this._apiStorage.cesarSesion()
    
    
    this._router.navigate(['/'])
    Swal.fire('Sesión finalizada con éxito', 'success').then(data => {
      window.location.reload()
    })
  }

}
