import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logomesa.png";
import {
    FaBars, FaHome, FaTimes, FaUser, FaCalendar, FaPhone, FaChevronDown
} from "react-icons/fa";
import { TbHierarchy } from "react-icons/tb";

const navLinks = [
    { text: "Inicio", path: "/", icon: FaHome },
    { text: "Calendario", path: "/calendario", icon: FaCalendar },
    { text: "Directorio", path: "/directorio", icon: FaPhone },
    {
        text: "Departamentos",
        icon: TbHierarchy,
        submenu: [
            { text: "Recursos Humanos", path: "/rh" },
            { text: "Capacitación", path: "/capacitacion" },
            { text: "Calidad", path: "/calidad" },
            { text: "Manufactura", path: "/manufactura" },
            { text: "EH&S y Responsabilidad Social", path: "/EH&S" },
        ],
    },
];

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleNavigate = (path) => {
        if (path) navigate(path);
    };

    const NavLink = ({ item, isMobile = false }) => {
        const isActive = location.pathname === item.path;
        const baseClasses = `flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-all duration-200`;
        const activeClasses = isMobile ? "bg-white/10" : "bg-white text-primary font-semibold";
        const inactiveClasses = isMobile ? "hover:bg-white/10" : "text-white hover:bg-white/20";

        return (
            <a
                href={item.path}
                onClick={(e) => { e.preventDefault(); handleNavigate(item.path); }}
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            >
                {item.icon && <item.icon className="mr-3 text-lg" />}
                {item.text}
            </a>
        );
    };

    return (
        <nav className="bg-primary shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div onClick={() => handleNavigate("/")} className="flex-shrink-0 flex items-center cursor-pointer">
                        <img src={Logo} alt="logo" className="h-10 w-auto" />
                        <span className="ml-3 text-xl font-bold text-white">Intranet MESA</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) =>
                            link.submenu ? (
                                <div key={link.text} className="relative" ref={dropdownRef}>
                                    <button
                                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20"
                                    >
                                        {link.icon && <link.icon className="mr-2 text-lg" />}
                                        {link.text}
                                        <FaChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-20">
                                            {link.submenu.map((subItem) => (
                                                <a key={subItem.text} href={subItem.path} onClick={(e) => { e.preventDefault(); handleNavigate(subItem.path); }}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                    {subItem.text}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink key={link.text} item={link} />
                            )
                        )}
                        <NavLink item={{ text: "Perfil", path: "/perfil", icon: FaUser }} />
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-white/80 hover:bg-white/20 hover:text-white">
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden bg-primary text-white transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen py-3' : 'max-h-0'} overflow-hidden`}>
                <div className="px-2 sm:px-3">
                    <div className="flex flex-col space-y-1">
                        {navLinks.map((link, index) => (
                            <div
                                key={link.text}
                                className={`transform transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                                style={{ transitionDelay: `${100 + index * 50}ms` }}
                            >
                                {link.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
                                            className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                                        >
                                            <span className="flex items-center">
                                                {link.icon && <link.icon className="mr-3 text-lg" />}
                                                {link.text}
                                            </span>
                                            <FaChevronDown className={`transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? 'max-h-96 mt-1' : 'max-h-0'} overflow-hidden`}>
                                            <div className="pl-6 space-y-1">
                                                {link.submenu.map((subItem) => <NavLink key={subItem.text} item={subItem} isMobile={true} />)}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <NavLink item={link} isMobile={true} />
                                )}
                            </div>
                        ))}
                        <div
                            className={`transform transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                            style={{ transitionDelay: `${100 + navLinks.length * 50}ms` }}
                        >
                            <div className="border-t border-white/20 my-2"></div>
                            <NavLink item={{ text: "Perfil", path: "/perfil", icon: FaUser }} isMobile={true} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;