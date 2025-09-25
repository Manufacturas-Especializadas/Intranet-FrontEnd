import { useState } from "react";
import {
    FaBars,
    FaHome,
    FaNewspaper,
    FaTimes,
    FaUser,
    FaCalendar,
    FaPhone
} from "react-icons/fa";
import { TbHierarchy } from "react-icons/tb";
import Logo from "../../assets/logomesa.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <nav className="bg-primary shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                src={Logo}
                                alt="logo"
                                className="h-12 w-auto mr-3"
                            />
                        </div>

                        <div className="hidden md:flex space-x-6 items-center">
                            <a onClick={() => handleNavigate("/")} className="flex items-center text-white 
                                hover:text-secondary transition-colors cursor-pointer">
                                <FaHome className="mr-2" />
                                <span>Inicio</span>
                            </a>
                            <a onClick={() => handleNavigate("calendario")} className="flex items-center text-white 
                                hover:text-secondary font-semibold transition-colors cursor-pointer">
                                <FaCalendar className="mr-2" />
                                <span>Calendario</span>
                            </a>
                            <a onClick={() => handleNavigate("directorio")} className="flex items-center text-white
                                hover:text-secondary font-semibold transition-colors cursor-pointer">
                                <FaPhone className="mr-2" />
                                <span>Directorio</span>
                            </a>
                            <div
                                className="relative group"
                            >
                                <button
                                    type="button"
                                    className="flex items-center text-white hover:text-secondary font-semibold
                                        transition-colors focus:outline-none"
                                    onMouseEnter={() => setDropdownOpen(true)}
                                >
                                    <TbHierarchy className="mr-2" />
                                    <span>Departamentos</span>
                                </button>
                                {
                                    isDropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg
                                            z-10 py-1"
                                            onMouseEnter={() => setDropdownOpen(true)}
                                            onMouseLeave={() => setDropdownOpen(false)}
                                        >
                                            <a
                                                onClick={() => handleNavigate("rh")}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                hover:text-secondary cursor-pointer"
                                            >
                                                Recursos Humanos
                                            </a>
                                            <a
                                                onClick={() => handleNavigate("capacitacion")}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                hover:text-secondary cursor-pointer"
                                            >
                                                Capacitación
                                            </a>
                                            <a
                                                onClick={() => handleNavigate("calidad")}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                hover:text-secondary cursor-pointer"
                                            >
                                                Calidad
                                            </a>
                                            <a
                                                onClick={() => handleNavigate("manufactura")}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                hover:text-secondary cursor-pointer"
                                            >
                                                Manufactura
                                            </a>
                                            <a
                                                onClick={() => handleNavigate("EH&S")}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                hover:text-secondary cursor-pointer"
                                            >
                                                EH&S y Responsabilidad Social
                                            </a>
                                        </div>
                                    )
                                }
                            </div>
                            <a
                                onClick={() => handleNavigate("perfil")}
                                className="flex items-center text-white 
                                hover:text-secondary font-semibold transition-colors
                                cursor-pointer">
                                <FaUser className="mr-2" />
                                <span>Perfil</span>
                            </a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setOpen(!isOpen)}
                                className="text-white focus:outline-none p-2 rounded cursor-pointer
                                transition-colors hover:bg-gray-300"
                            >
                                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {
                    isOpen && (
                        <div className="md:hidden bg-white shadow-lg">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    onClick={() => handleNavigate("/")}
                                    className="flex items-center px-3 py-2 
                                    rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    <FaHome className="mr-2" />
                                    Inicio
                                </a>
                                <a
                                    onClick={() => handleNavigate("calendario")}
                                    className="flex items-center px-3 py-2
                                    rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    <FaCalendar className="mr-2" />
                                    Calendario
                                </a>
                                <a
                                    onClick={() => handleNavigate("directorio")}
                                    className="flex items-center px-3 py-2
                                    rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    <FaPhone className="mr-2" />
                                    Directorio
                                </a>
                                <div className="relative">
                                    <button
                                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                                        className="w-full flex items-center justify-between px-3 py-2
                                        rounded-md text-gray-600 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <span className="flex items-center">
                                            <TbHierarchy className="mr-2" />
                                            Departamentos
                                        </span>
                                        <svg
                                            className={`w-4 h-4 transform ${isDropdownOpen ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                    {
                                        isDropdownOpen && (
                                            <div className="pl-6 space-y-1">
                                                <a
                                                    onClick={() => handleNavigate("rh")}
                                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Recursos Humanos
                                                </a>
                                                <a
                                                    onClick={() => handleNavigate("capacitacion")}
                                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Capacitación
                                                </a>
                                                <a
                                                    onClick={() => handleNavigate("calidad")}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                    hover:text-secondary cursor-pointer"
                                                >
                                                    Calidad
                                                </a>
                                                <a
                                                    onClick={() => handleNavigate("manufactura")}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                    hover:text-secondary cursor-pointer"
                                                >
                                                    Manufactura
                                                </a>
                                                <a
                                                    onClick={() => handleNavigate("EH&S")}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 
                                                    hover:text-secondary cursor-pointer"
                                                >
                                                    EH&S y Responsabilidad Social
                                                </a>
                                            </div>
                                        )
                                    }
                                </div>
                                <a
                                    onClick={() => handleNavigate("perfil")}
                                    className="flex items-center px-3 py-2
                                    rounded-md text-gray-600 hover:bg-gray-100"
                                >
                                    <FaUser className="mr-2" />
                                    Perfil
                                </a>
                            </div>
                        </div>
                    )
                }
            </nav>
        </>
    )
}

export default Navbar