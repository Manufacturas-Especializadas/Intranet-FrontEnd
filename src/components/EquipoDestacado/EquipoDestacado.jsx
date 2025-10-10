import { useState, useEffect } from "react";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import featuredCollaboratorsService from "../../api/services/featuredCollaboratorsService";

const EquipoDestacado = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [collaborator, setCollaborator] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCollaborator = async () => {
            try {
                const response = await featuredCollaboratorsService.getCollaborator();
                setCollaborator(response.data);
            } catch (error) {
                console.error("Error al obtener los datos: ", error);
                setCollaborator([]);
            } finally {
                setLoading(false);
            }
        }
        getCollaborator();
    }, []);

    useEffect(() => {
        if (collaborator.length > 1) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % collaborators.length);
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [collaborator]);


    if (loading) {
        return (
            <div className="py-10 bg-gray-50">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <p>Cargando colaboradores...</p>
                </div>
            </div>
        );
    }

    if (collaborator.length === 0) {
        return (
            <div className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <HeaderTitle
                        title="Colaboradores destacados"
                        subtitle="Conocé a nuestros colaboradores más sobresalientes"
                    />
                    <div className="text-center mt-8 p-8 bg-white rounded-lg shadow-sm">
                        <p className="text-gray-500">
                            Actualmente no hay colaboradores destacados para mostrar.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className=" bg-gray-50">
            <div className="container mx-auto px-4">

                <div className="pt-8">
                    <HeaderTitle
                        title="Colaboradores destacados"
                        subtitle="Conocé a nuestros colaboradores más sobresalientes"
                    />
                </div>

                <div className="relative max-w-2xl mx-auto mt-8 h-80">
                    {collaborator.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                                ${index === activeIndex ? "opacity-100" : "opacity-0"}`
                            }
                        >
                            <div className="flex flex-col items-center text-center h-full justify-center">
                                <img
                                    className="rounded-full w-24 h-24 object-cover mx-auto shadow-md border-4 border-white"
                                    src={item.photo}
                                    alt={item.name}
                                />
                                <p className="text-gray-600 mt-4 text-base italic">
                                    "{item.testimonial}"
                                </p>
                                <h3 className="text-xl font-bold mt-2 text-primary-dark">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {collaborator.length > 1 && (
                    <div className="flex justify-center space-x-3 mt-4">
                        {collaborator.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300
                                    ${index === activeIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"}`
                                }
                                aria-label={`Ir al testimonio ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EquipoDestacado;