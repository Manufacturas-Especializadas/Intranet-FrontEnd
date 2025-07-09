import { act, useState } from "react";
import { FaIdCard, FaUserCircle } from "react-icons/fa";

const PerfilNavLateral = () => {
    const[activeMenu, setActiveMenu] = useState(null);

    const opcionesDepartamentos = {
        rrhh: [
            { nombre: "Vacaciones", link: "/rrhh/vacaciones" },
            { nombre: "Registro de empleados", link: "/rrhh/registro-empleados" },
            { nombre: "Evaluaciones", link: "/rrhh/evaluaciones" }
        ],
        capacitacion: [
            { nombre: "Cursos disponibles", link: "/capacitacion/cursos" },
            { nombre: "Inscripción a talleres", link: "/capacitacion/talleres" }
        ],
        sistemas: [
            { nombre: "Soporte técnico", link: "/sistemas/soporte" },
            { nombre: "Licencias", link: "/sistemas/licencias" }
        ],
        planeacion: [
            { nombre: "Metas mensuales", link: "/planeacion/metas" },
            { nombre: "Reportes", link: "/planeacion/reportes" }
        ]
    };

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-5 space-y-3">
                <h2 className="font-semibold text-gray-700 mb-4">
                    Mi perfil
                </h2>

                <a 
                    href=""
                    className="flex items-center gap-3 p-3 rounded-md bg-primary text-white"
                >
                    <FaUserCircle/> Información personal              
                </a>
                <a 
                    href=""
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100"
                >
                    <FaIdCard/> Documentación
                </a>
                
                <div>
                    <button
                        onClick={() => setActiveMenu(activeMenu === "rrhh" ? null : "rrhh")}
                        className="w-full flex justify-between items-center p-3 rounded-md hover:bg-gray-100 
                            focus:outline-none"
                    >
                    <span className="flex items-center gap-3">Recursos Humanos</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${activeMenu === "rrhh" ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>

                    {activeMenu === "rrhh" && (
                    <div className="pl-6 mt-2 space-y-2 border-l-2 border-gray-200">
                        {
                            opcionesDepartamentos.rrhh.map((item, index) => (
                                <a
                                    key={ index }
                                    href={ item.link }
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                                >
                                    { item.nombre }
                                </a>
                            ))
                        }
                    </div>
                    )}
                </div>

                <div>
                    <button
                        onClick={() => setActiveMenu(activeMenu === "capacitacion" ? null : "capacitacion")}
                        className="w-full flex justify-between items-center p-3 rounded-md hover:bg-gray-100 
                        focus:outline-none"
                    >
                    <span className="flex items-center gap-3">Capacitación</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${
                            activeMenu === "capacitacion" ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>

                    {activeMenu === "capacitacion" && (
                    <div className="pl-6 mt-2 space-y-2 border-l-2 border-gray-200">
                        {
                            opcionesDepartamentos.capacitacion.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                                >
                                    {item.nombre}
                                </a>
                            ))
                        }
                    </div>
                    )}
                </div>

                <div>
                    <button
                        onClick={() => setActiveMenu(activeMenu === "sistemas" ? null : "sistemas")}
                        className="w-full flex justify-between items-center p-3 rounded-md hover:bg-gray-100 
                        focus:outline-none"
                    >
                    <span className="flex items-center gap-3">Sistemas</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${
                            activeMenu === "sistemas" ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>

                    {activeMenu === "sistemas" && (
                        <div className="pl-6 mt-2 space-y-2 border-l-2 border-gray-200">
                            {
                                opcionesDepartamentos.sistemas.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.link}
                                        className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                                    >
                                        {item.nombre}
                                    </a>
                                ))
                            }
                        </div>
                    )}
                </div>

                <hr className="my-4"/>

                <a 
                    href=""
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-red-50 text-red-600"
                >
                    Cerrar sesión
                </a>
            </div>
        </>
    )
}

export default PerfilNavLateral