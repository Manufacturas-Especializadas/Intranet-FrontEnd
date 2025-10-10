import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/logomesa.png";

const footerData = {
    about: {
        logo: Logo,
        name: "Manufacturas Especializadas",
        description: "Comprometidos con la excelencia operativa y la mejora continua, impulsamos el desarrollo y la innovación en cada proceso.",
    },
    contact: [
        {
            icon: FaLocationArrow,
            text: "Carretera a Villa de García 3850, Santa Catarina, N.L México C.P.66350",
        },
        {
            icon: FaMobileAlt,
            text: "(81) 8850-2500",
        },
    ],
    socials: [
        { icon: FaInstagram, url: "#" },
        { icon: FaFacebook, url: "#" },
        { icon: FaLinkedin, url: "#" },
    ],
    linkGroups: [
        {
            title: "Links Importantes",
            links: [
                { text: "Inicio", path: "/" },
                { text: "Calendario", path: "/calendario" },
                { text: "Directorio", path: "/directorio" },
                { text: "Perfil", path: "/perfil" },
            ],
        },
        {
            title: "Departamentos",
            links: [
                { text: "Recursos Humanos", path: "/rh" },
                { text: "Capacitación", path: "/capacitacion" },
                { text: "Calidad", path: "/calidad" },
                { text: "Manufactura", path: "/manufactura" },
                { text: "EH&S", path: "/EH&S" },
            ],
        },
    ],
    copyright: `© ${new Date().getFullYear()} Manufacturas Especializadas S.A. Todos los derechos reservados.`
};

const Footer = () => {
    return (
        <footer className="bg-slate-200">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 py-12">

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={footerData.about.logo} alt="Logo" className="w-16" />
                            <h2 className="text-2xl font-bold text-slate-800">{footerData.about.name}</h2>
                        </div>
                        <p className="text-sm leading-relaxed">{footerData.about.description}</p>
                        {footerData.contact.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <item.icon className="text-xl mt-1 text-[#00B0F5]" />
                                <p className="text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerData.linkGroups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{group.title}</h3>
                                <ul className="space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.text}>
                                            <Link
                                                to={link.path}
                                                className="hover:text-[#00B0F5] hover:pl-2 transition-all duration-300"
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-slate-300">
                    <p className="text-sm text-slate-500">{footerData.copyright}</p>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                        {footerData.socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-2xl text-slate-500 hover:text-[#00B0F5] hover:scale-110 transition-all duration-300"
                            >
                                <social.icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;