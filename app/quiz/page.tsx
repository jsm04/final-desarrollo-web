// app/quiz/page.tsx
import QuizController from "../../components/QuizController";
import preguntas from "../../data/preguntas.json";
import { Pregunta } from "../../data/types";

export default function QuizPage() {
    // preguntas.json is imported at build time.
    // If you want runtime loading, we can switch to fs/promises.
    const data = preguntas as Pregunta[];

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <QuizController preguntas={data} />
        </div>
    );
}
