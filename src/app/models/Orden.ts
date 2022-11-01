import { Avance } from "./Avance";
import { Cliente } from "./Cliente";
import { opcionCompra } from "./OpcionCompra";
export class Orden
{
    id: number = 0;
    cliente! : Cliente;
    citas! : Date[];
    id_vestido : number = 0;
    avances! : Avance[];
    valor : number = 0;
    opcionCompra! : opcionCompra;
    valorDeposito : number = 0;
}