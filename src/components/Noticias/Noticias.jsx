import HeaderTitle from "../HeaderTitle/HeaderTitle";
import Img1 from "../../assets/imgNoticias/img1.jfif";
import Img2 from "../../assets/imgNoticias/img2.jfif";
import Img3 from "../../assets/imgNoticias/img3.jfif";
import { Link } from "react-router-dom";

const noticiasData = [
    {
        id: 1,
        img: Img1,
        name: "Nueva Plataforma de Innovación Interna",
        description:
            "Se lanza una nueva herramienta digital para fomentar ideas innovadoras entre los colaboradores. El sistema permitirá registrar, evaluar y dar seguimiento a propuestas de mejora en tiempo real.",
        aosDelay: "100"
    },
    {
        id: 2,
        img: Img2,
        name: "Refuerzo de Normas y Buenas Prácticas",
        description:
            "Se implementan nuevas capacitaciones sobre disciplina organizacional. Estas acciones buscan fortalecer la cultura del cumplimiento y la excelencia en los procesos internos.",
        aosDelay: "300"
    },
    {
        id: 3,
        img: Img3,
        name: "Éxito del Taller de Trabajo en Equipo",
        description:
            "El reciente taller sobre trabajo colaborativo reunió a más de 100 participantes de distintas áreas. Se destacaron dinámicas para mejorar la comunicación, la confianza y la resolución de conflictos.",
        aosDelay: "500"
    }
];


const Noticias = () => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="py-12 lg:py-20">
                    <div className="container">
                        <HeaderTitle
                            title="Noticias internas"
                            subtitle="Las noticias más relevantes de la semana"
                            description={
                                "Aquí encontrarás los últimos anuncios, actualizaciones y novedades importantes dentro de nuestra organización. Mantente informado y al día con lo que sucede en MESA"
                            }
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 
                            md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                            {
                                noticiasData.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/noticia/${item.id}`}
                                        data-aos="fade-up"
                                        data-aos-delay={item.aosDelay}
                                        className="rounded-2xl bg-white hover:bg-primary 
                                        hover:text-white relative shadow-xl duration-300 group max-w-[300px] 
                                        block transform hover:-translate-y-1 transition-transform"
                                    >
                                        <div className="h-[100px]">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="max-w-[150px] block mx-auto transform -translate-y-16
                                                group-hover:scale-105 duration-300 p-2"
                                            />
                                        </div>
                                        <div className="p-4 text-center">
                                            <h1 className="text-xl font-bold">{item.name}</h1>
                                            <p
                                                className="text-gray-500 group-hover:text-white 
                                                duration-300 text-sm line-clamp-2"
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noticias