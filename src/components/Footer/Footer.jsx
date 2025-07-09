import { 
    FaFacebook,
    FaInstagram, 
    FaLinkedin, 
    FaLocationArrow, 
    FaMobileAlt 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logomesa.png";

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <div data-aos="fade-up" className="bg-gray-300">
                <section className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-3 py-5">

                        <div className="py-8 px-4">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left
                                text-justify mb-3 flex items-center gap-3">
                                <img src={ Logo } alt="Logo" className="w-16"/>
                                Manufacturas Especializadas
                            </h1>
                            <p>
                                Comprometidos con la excelencia operativa y la mejora continua, 
                                en Manufacturas Especializadas impulsamos el desarrollo de nuestros 
                                colaboradores y la innovación en cada uno de nuestros procesos.
                            </p>
                            <br />
                            <div className="flex items-center gap-3">
                                <FaLocationArrow size={ 33 }/>
                                <p>
                                    Manufacturas Especializadas S.A.
                                    Carretera a Villa de García 3850
                                    Santa Catarina, N.L México C.P.66350
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt size={ 25 }/>
                                <p>(81) 8850-2500</p>
                            </div>

                            <div className="flex items-center gap-3 mt-6">
                                <a href="">
                                    <FaInstagram className="text-3xl"/>
                                </a>
                                <a href="">
                                    <FaFacebook className="text-3xl"/>
                                </a>
                                <a href="">
                                    <FaLinkedin className="text-3xl"/>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                            <div>
                                <div className="py-8 px-4">
                                    <h2 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                        Links importantes
                                    </h2>

                                    <ul className="flex flex-col gap-3">
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/")}>
                                            Incio
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/calendario")}>
                                            Calendario
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/directorio")}>
                                            Directorio
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/perfil")}>
                                            Perfil
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="py-8 px-4">
                                    <h2 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                                        Departamentos
                                    </h2>

                                    <ul className="flex flex-col gap-3">
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/rh")}>
                                            Recursos Humanos
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/capacitacion")}>
                                            Capacitación
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/calidad")}>
                                            Calidad
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/manufactura")}>
                                            Manufactura
                                        </li>
                                        <li className="hover:cursor-pointer hover:text-primary" onClick={() => handleNavigate("/EH&S")}>
                                            EH&S y Responsabilidad Social
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer