import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import internalNewService from "../../api/services/internalNewService";
import { FaRegNewspaper } from 'react-icons/fa';

const Noticias = () => {
    const [internalNews, setInternalNews] = useState([]);

    useEffect(() => {
        const loadInternalNews = async () => {
            try {
                const response = await internalNewService.getInernalNews();
                setInternalNews(response.data);
            } catch (error) {
                console.error("Error al obtener los datos: ", error);
            }
        }
        loadInternalNews();
    }, []);

    return (
        <>
            <div className="bg-gray-100">
                <div className="py-8 lg:py-10">
                    <div className="container mx-auto px-4">
                        <HeaderTitle
                            title="Noticias internas"
                            subtitle="Las noticias más relevantes de la semana"
                            description="Aquí encontrarás los últimos anuncios, actualizaciones y novedades dentro de MESA. Para ver los detalles, solo tienes que hacer clic en la noticia que te interese."
                        />

                        <div className="flex flex-wrap justify-center gap-8">
                            {internalNews.length > 0 ? (
                                internalNews.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/noticia/${item.id}`}
                                        className="flex flex-col w-64 bg-white rounded-2xl border-4 border-white overflow-hidden text-gray-600 shadow-xl cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
                                    >
                                        <div
                                            className="h-52 w-full grid place-items-center text-white bg-gradient-to-bl from-[#00B0F5] to-[#0081C9] [border-radius:100%_0%_100%_0%_/_0%_50%_50%_100%]"
                                        >
                                            <FaRegNewspaper size={72} />
                                        </div>

                                        <div className="flex flex-col items-center flex-grow p-4">
                                            <h1 className="text-center uppercase font-bold text-base mb-2 truncate w-full">{item.title}</h1>
                                            <p className="text-center text-xs text-gray-500 mb-3 line-clamp-3">{item.description}</p>

                                            <div className="mt-auto rounded-full py-1.5 px-8 text-white uppercase text-sm bg-gradient-to-l from-[#00B0F5] to-[#0081C9]">
                                                Ver más
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10">
                                    <p className="text-gray-500 text-lg">No hay noticias disponibles.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noticias