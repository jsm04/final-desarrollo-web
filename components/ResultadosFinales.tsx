interface ResultadoPregunta {
    id: string;
    texto: string;
    seleccionUsuario: string | null;
    correcta: string;
    explicacion?: string;
}

interface Props {
    puntaje: number;
    total: number;
    resultados: ResultadoPregunta[];
    onReiniciar: () => void;
}

export default function ResultadosFinales({
    puntaje,
    total,
    resultados,
    onReiniciar,
}: Props) {
    const porcentaje = total > 0 ? Math.round((puntaje / total) * 100) : 0;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                Resultados
            </h2>

            <p className="text-xl mb-4 text-center">
                Tu puntaje final es <strong>{puntaje}</strong> de{" "}
                <strong>{total}</strong> ({porcentaje}% de aciertos)
            </p>

            <div className="mt-6 max-h-[60vh] flex flex-col align-middle overflow-y-auto space-y-4">
                {resultados.map((r, i) => {
                    const esCorrecta = r.correcta === r.seleccionUsuario;

                    return (
                        <div
                            key={r.id}
                            className="p-4 rounded-lg shadow-md bg-gray-50 min-h-48"
                        >
                            <h3 className="text-gray-800 font-semibold text-lg mb-2">
                                {i + 1}. {r.texto}
                            </h3>
                            <p>
                                Tu respuesta:{" "}
                                <span
                                    className={
                                        esCorrecta
                                            ? "text-green-400 font-bold"
                                            : "text-red-500 font-bold"
                                    }
                                >
                                    {r.seleccionUsuario || "No respondida"}
                                </span>
                            </p>
                            {!esCorrecta && (
                                <p>
                                    Respuesta correcta:{" "}
                                    <span className="text-green-600 font-bold">
                                        {r.correcta}
                                    </span>
                                </p>
                            )}
                            {r.explicacion && (
                                <p className="mt-1 text-gray-700 italic text-sm">
                                    {r.explicacion}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={onReiniciar}
                    className="px-6 py-3 bg-blue-600 text-xl text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Reiniciar Quiz
                </button>
            </div>
        </div>
    );
}
