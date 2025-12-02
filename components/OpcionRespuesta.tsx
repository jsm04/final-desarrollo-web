interface Props {
    id: string;
    texto: string;
    checked: boolean;
    onClick: () => void;
}

export default function OpcionRespuesta({ texto, checked, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className={`flex bg-white items-center gap-3 p-3 border rounded-lg text-left transition`}
        >
            <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center`}
            >
                {checked && (
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                )}
            </span>

            <span className={`text-gray-800 text-lg`}>{texto}</span>
        </button>
    );
}
