"use client";

import { useReducer, useState } from "react";
import { Pregunta } from "../data/types";
import { useRouter } from "next/navigation";
import Temporizador from "./Temporizador";
import TarjetaPregunta from "./TarjetaPregunta";
import { useQuiz } from "@/components/QuizProvider";

interface Props {
    preguntas: Pregunta[];
}

interface State {
    index: number;
    seleccion: string | null;
    puntaje: number;
    respuestas: Record<string, string | null>;
}

type Action =
    | {
          type: "SELECT_OPTION";
          payload: string;
          correcta: string;
          idPregunta: string;
      }
    | { type: "NEXT" }
    | { type: "RESET_SELECTION" };

function quizReducer(state: State, action: Action): State {
    switch (action.type) {
        case "SELECT_OPTION": {
            const isCorrect = action.payload === action.correcta;
            return {
                ...state,
                seleccion: action.payload,
                puntaje: isCorrect ? state.puntaje + 1 : state.puntaje,
                respuestas: {
                    ...state.respuestas,
                    [action.idPregunta]: action.payload,
                },
            };
        }

        case "RESET_SELECTION":
            return { ...state, seleccion: null };

        case "NEXT":
            return { ...state, index: state.index + 1, seleccion: null };

        default:
            return state;
    }
}

export default function QuizController({ preguntas }: Props) {
    const router = useRouter();
    const { setResultados } = useQuiz();
    const [terminado, setTerminado] = useState(false);

    const [state, dispatch] = useReducer(quizReducer, {
        index: 0,
        seleccion: null,
        puntaje: 0,
        respuestas: {} as Record<string, string | null>,
    });

    const preguntaActual = preguntas[state.index];

    const handleSelect = (opcionId: string) => {
        dispatch({
            type: "SELECT_OPTION",
            payload: opcionId,
            correcta: preguntaActual.correcta,
            idPregunta: preguntaActual.id, // <-- pasar el id de la pregunta
        });
    };

    const avanzar = () => {
        // Si no hay selección, se cuenta como incorrecta
        if (!state.seleccion) {
            dispatch({
                type: "SELECT_OPTION",
                payload: "",
                correcta: preguntaActual.correcta,
                idPregunta: preguntaActual.id,
            });
        }

        const ultima = state.index === preguntas.length - 1;

        if (ultima) {
            finalizar();
            return;
        }

        dispatch({ type: "NEXT" });
    };

    const finalizar = () => {
        if (terminado) return;
        setTerminado(true);
        const resultados = preguntas.map((p) => {
            const seleccionUsuario = state.respuestas[p.id] ?? null;
            return {
                id: p.id,
                texto: p.texto,
                seleccionUsuario,
                correcta: p.correcta,
                explicacion: p.explicacion || "",
            };
        });

        setResultados(state.puntaje, preguntas.length, resultados);
        router.push("/resultados");
    };

    const handleTimeout = () => {
        avanzar();
    };

    return (
        <div className="max-w-xl w-full px-4">
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 w-full mt-4">
                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
                    Pregunta {state.index + 1} de {preguntas.length}
                </h2>

                <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
                    Puntuacion: <span className="text-xl">{state.puntaje}</span>
                </h2>

                <Temporizador
                    key={state.index}
                    duracionSegundos={60}
                    onTimeout={handleTimeout}
                />

                <TarjetaPregunta
                    pregunta={preguntaActual}
                    seleccion={state.seleccion}
                    onSelect={handleSelect}
                />

                <button
                    onClick={avanzar}
                    className="mt-5 px-6 py-3 rounded-lg text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 transition block mx-auto w-max"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}
