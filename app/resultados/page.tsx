"use client";

import { useQuiz } from "@/components/QuizProvider";
import ResultadosFinales from "@/components/ResultadosFinales";

export default function ResultadosPage() {
    const { puntaje, total, resultados, reiniciarQuiz } = useQuiz();

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="flex w-full max-w-2xl justify-center ">
                <div className="flex flex-col min-w-[40vw] bg-white shadow-xl rounded-3xl p-12 max-w-3xl w-full justify-center">
                    <ResultadosFinales
                        puntaje={puntaje}
                        total={total}
                        resultados={resultados}
                        onReiniciar={reiniciarQuiz}
                    />
                </div>
            </div>
        </main>
    );
}
