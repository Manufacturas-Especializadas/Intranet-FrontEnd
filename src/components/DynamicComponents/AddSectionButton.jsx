import { FaPlus } from "react-icons/fa";


export const AddSectionButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16
            h-16 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200
            ease-in-out z-50 hover:cursor-pointer"
            aria-label="Añadir nueva sección"
        >
            <FaPlus size={24} />
        </button>
    )
}