import { Medidas } from "./Medidas";
export class Cliente
{
    id : number = 0;
    cedula : string = '';
    nombre : string = '';
    telefono : string = '';
    correo : string = '';
    medidas! : Medidas[];
}