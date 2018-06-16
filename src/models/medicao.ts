import { Tanque } from "./tanque";

export interface Medicao {
	id: Number;
	name: string;
	capacity: Number;
	medicao: {
        id: Number;
        dataMedicao: Date;
        registro: String;
        tipo: String;
    }
}