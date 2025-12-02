"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

export interface ResultadoPregunta {
    id: string;
    texto: string;
    seleccionUsuario: string | null;
    correcta: string;
    explicacion?: string;
}

interface QuizContextValue {
    puntaje: number;
    total: number;
    resultados: ResultadoPregunta[];
    setResultados: (p: number, t: number, res: ResultadoPregunta[]) => void;
    reiniciarQuiz: () => void;
}

const QuizContext = createContext<QuizContextValue | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [puntaje, setPuntaje] = useState(0);
    const [total, setTotal] = useState(0);
    const [resultados, setResultadosState] = useState<ResultadoPregunta[]>([]);
    const router = useRouter()

    const setResultados = (p: number, t: number, res: ResultadoPregunta[]) => {
        setPuntaje(p);
        setTotal(t);
        setResultadosState(res);
    };

    const reiniciarQuiz = () => {
        setPuntaje(0);
        setTotal(0);
        setResultadosState([]);
        router.push("/quiz");
    };

    return (
        <QuizContext.Provider
            value={{ puntaje, total, resultados, setResultados, reiniciarQuiz }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const ctx = useContext(QuizContext);
    if (!ctx) throw new Error("useQuiz must be inside QuizProvider");
    return ctx;
};
