"use client";

import { useEffect, useState } from "react";

interface Props {
    duracionSegundos: number;
    onTimeout: () => void;
}

export default function Temporizador({ duracionSegundos, onTimeout }: Props) {
    const [tiempo, setTiempo] = useState(duracionSegundos);

    useEffect(() => {
        setTiempo(duracionSegundos);
    }, [duracionSegundos]);

    useEffect(() => {
        if (tiempo <= 0) {
            onTimeout();
            setTiempo(duracionSegundos);
            return;
        }

        const t = setTimeout(() => setTiempo((t) => t - 1), 1000);
        return () => clearTimeout(t);
    }, [tiempo, onTimeout]);

    return (
        <div className="text-center text-gray-700 font-medium mb-4">
            Tiempo restante: {tiempo}s
        </div>
    );
}
