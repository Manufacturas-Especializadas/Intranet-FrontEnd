import { useNavigate } from "react-router-dom";
import heroCalendario from "../../assets/heroCalendario.jfif";

const Calendario = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return(
        <>
            <section className="min-h-[550px] bg-gray-100">
                <div className="min-h-[550px] flex justify-center
                    items-center backdrop-blur-xl py-12 sm:py-0">
                    <div className="contianer">
                        <div className="grid grid-cols-1
                            sm:grid-cols-2 gap-6">
                                {/* image section */}
                            <div>
                                <img 
                                    src={ heroCalendario } 
                                    alt="calendario"
                                    className="max-w-[430px] w-full mx-auto
                                        drop-shadow-[-10px_10_12px_rgba(0,0,0,1)]"
                                />
                            </div>

                            {/* text conten section */}
                            <div className="flex flex-col 
                                justify-center gap-6 sm:pt-0">
                                <h1 
                                    data-aos="fade-up"
                                    className="text-3xl sm:text-4xl font-bold">
                                    Calendario MESA
                                </h1>
                                <p
                                    data-aos="fade-up"
                                    className="text-sm text-gray-500 
                                    tracking-wide leading-5"
                                >
                                    Consulta todas las fechas clave relacionadas con las actividades de la MESA. 
                                    Encuentros, capacitaciones, revisiones de avance y otras sesiones importantes 
                                    están organizadas para facilitar tu planificación y participación activa.
                                    <br />
                                    <br />
                                    Este calendario está diseñado para mantener a todos los miembros informados y 
                                    alineados con los objetivos del equipo. Revísalo frecuentemente para estar al tanto 
                                    de cualquier actualización o cambio en la programación.
                                </p>
                                <div data-aos="fade-up" data-aos-delay="500">
                                    <button
                                        className="bg-gradient-to-r from-primary
                                            to-secondary text-white py-2 px-4
                                            rounded-full shadow-xl hover:shadow-md
                                            cursor-pointer"
                                            onClick={() => handleNavigate("calendario")}
                                    >
                                        Ver calendario
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calendario