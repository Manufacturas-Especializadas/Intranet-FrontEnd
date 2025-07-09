
const PerfilInformacion = ({ usuario }) => {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6 w-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Información personal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Nombre completo
                        </label>
                        <p className="mt-1 text-gray-800">
                            { usuario.nombre }
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Correo electrónico
                        </label>
                        <p className="mt-1 text-gray-800 break-words max-w-full">
                            { usuario.correo }
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Departamento
                        </label>
                        <p className="mt-1 text-gray-800">
                            { usuario.departamento }
                        </p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            Extensión
                        </label>
                        <p className="mt-1 text-gray-800">
                            { usuario.extension }
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Acciones especpificas ({ usuario.departamento })
                    </h3>

                    {/* <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                        <li>Registro de empleados nuevos</li>
                        <li>Solicitudes de vacaciones</li>
                        <li>Cursos internos de desarrollo humano</li>
                    </ul>

                    <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                        <li>Inscripción a talleres</li>
                        <li>Programas de formación continua</li>
                        <li>Seguimiento de cursos activos</li>
                    </ul> */}

                    <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                        <li>Soporte técnico interno</li>
                        <li>Software y licencias</li>
                        <li>Acceso a repositorios y sistemas internos</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PerfilInformacion