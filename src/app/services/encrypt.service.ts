import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }
  encypt(contrasena: string) : string{
    //return CryptoJS.AES.encrypt(contrasena.trim(), this.secret.trim()).toString();;
    return btoa(contrasena)
  }

  desencypt(contrasena: string): string{
    //return CryptoJS.AES.decrypt(contrasena.trim(), this.secret.trim()).toString(CryptoJS.enc.Utf8);;
    return atob(contrasena)
  }
}
