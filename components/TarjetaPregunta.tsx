import { Pregunta } from '../data/types';
import OpcionRespuesta from './OpcionRespuesta';

interface TarjetaPreguntaProps {
    pregunta: Pregunta;
    seleccion: string | null;
    onSelect: (opcionId: string) => void;
}

export default function TarjetaPregunta({
    pregunta,
    seleccion,
    onSelect,
}: TarjetaPreguntaProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">{pregunta.texto}</h3>
            <div className="flex flex-col gap-3">
                {pregunta.opciones.map((opcion) => {
                    let bgClass = "border rounded-lg border-gray-300 hover:bg-gray-100";

                    let mensaje: string | null = null;
                    if (seleccion) {
                        if (opcion.id === pregunta.correcta) {
                            bgClass = "bg-green-400 text-white";
                        } else {
                            bgClass = "bg-red-400 text-white";
                        }

                        if (opcion.id === seleccion) {
                            mensaje = opcion.id === pregunta.correcta ? "Correcto ✅" : "Incorrecto ❌";
                        }
                    }

                    return (
                        <div key={opcion.id} className="flex flex-col">
                            {mensaje && (
                                <span className="text-md font-medium text-gray-600 mb-1 text-center">
                                    {mensaje}
                                </span>
                            )}
                            <button
                                onClick={() => !seleccion && onSelect(opcion.id)}
                                className={`p-3 rounded-lg font-medium transition ${bgClass}`}
                                disabled={!!seleccion}
                            >
                                {opcion.texto}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
