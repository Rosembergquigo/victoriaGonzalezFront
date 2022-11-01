import { Perfil } from "./Perfil";

export class Usuario
{
    id : number  = 0;
    cedula : string = '';
    nombres: string = '';
    telefono : string = '';
    contrasena : string = '';
    correo : string = '';
    perfil! : Perfil 
}