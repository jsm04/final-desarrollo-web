import Image from "next/image";
import PantallaInicio from "../components/PantallaInicio";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-2xl">
                <div className="bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
                    <PantallaInicio />
                </div>
            </div>
        </main>
    );
}
