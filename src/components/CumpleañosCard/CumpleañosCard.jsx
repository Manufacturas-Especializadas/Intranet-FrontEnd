
const CumpleañosCard = ({ nombre, fecha, departamento, foto, frase }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-xl
                overflow-hidden transform transition-300 hover:shadow-2xl
                hover:scale-105 max-w-sm w-full mx-auto border-t-4 border-primary">
                <div className="h-28 bg-gradient-to-r from-primary to-secondary
                    flex items-center justify-center relative">
                    <img 
                        src={ foto } 
                        alt={`Foto de ${ nombre }`}
                        className="absolute bottom-0 translate-y-1/2 w-28 h-28
                            rounded-full border-4 border-white object-cover shadow-md"
                    />
                </div>

                <div className="p-6 text-center mt-8">
                    <h3 className="text-xl font-bold text-gray-800">
                        { nombre }
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        { departamento }
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        { fecha }
                    </p>
                    <div className="mt-4 text-gray-700 italic text-sm px-2">
                        <p>"{ frase }"</p>
                    </div>
                </div>

                <div className="px-5 pb-5">
                    <button className="w-full py-2 bg-gradient-to-r from-primary to-secondary
                        text-white rounded-full text-sm font-semibold hover:opacity-90 transition">
                        !Feliz Cumpleaños!
                    </button>
                </div>
            </div>
        </>
    )
}

export default CumpleañosCard