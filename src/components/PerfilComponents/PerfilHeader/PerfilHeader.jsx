
const PerfilHeader = ({ usuario }) => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-xl p-6 mb-8 
                flex flex-col md:flex-row items-center gap-6">
                <img 
                    src={ usuario.foto } 
                    alt={`Foto de ${ usuario.nombre }`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                />
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold text-gray-800">
                        { usuario.nombre }
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        { usuario.puesto } • { usuario.departamento }
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        { usuario.ubicacion }
                    </p>
                </div>
            </div>
        </>
    )
}

export default PerfilHeader