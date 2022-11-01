import { Cliente } from "./Cliente";
import { Sede } from "./Sede";
import { Orden } from "./Orden"
export class Factura
{
    id : number = 0;
    cliente! : Cliente;
    sede! : Sede;
    fechaEntrega! : Date;
    fechaEvento! : Date;
    ordenes! : Orden[];
    valorTotal : number = 0;
}