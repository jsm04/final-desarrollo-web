export default function PantallaInicio() {
    return (
        <div className="flex flex-col items-center text-center gap-6 p-4 max-w-md mx-auto">
            {/* Title Box */}
            <div className=" border border-gray-100 shadow-md rounded-xl p-11 w-full">
                <h1 className="text-3xl font-bold text-gray-800">
                    🎓 Bienvenido al Quiz
                </h1>
                <p className="text-gray-600 mt-2">
                    Pon a prueba tus conocimientos de manera rápida y sencilla.
                </p>
            </div>

            {/* Info Box */}
            <div className="border border-gray-100 shadow-md rounded-xl p-11 w-full text-left">
                <h2 className="text-2xl mb-2 font-bold text-gray-800">
                    ℹ️ Información

                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Preguntas de conocimiento general</li>
                    <li>Número de preguntas: 10</li>
                    <li>Tiempo por pregunta: 30 segundos</li>
                    <li>Reglas: Sin penalización por error</li>
                </ul>
            </div>

            {/* Start Button Box */}
            <div className="bg-white p-6 w-full">
                <button
                    type="button"
                    className="px-6 py-4 rounded-lg text-white font-medium bg-blue-600 text-lg hover:bg-blue-700 transition block mx-auto w-max"
                >
                    <a href="/quiz">Comenzar Quiz!</a>
                </button>
            </div>
        </div>
    );
}
