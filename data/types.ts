export interface Pregunta {
	id: string;
	texto: string;
	opciones: Opcion[];
	correcta: string;
    explicacion: string;
}

export interface Opcion {
	id: string;
	texto: string;
}

export interface RespuestaUsuario {
	preguntaId: string;
	opcionId: string | null;
}
