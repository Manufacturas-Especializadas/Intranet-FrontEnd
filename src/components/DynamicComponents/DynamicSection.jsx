import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { FaBullhorn, FaPencilAlt, FaTrash } from "react-icons/fa";
import { RoleGuard } from "../RoleGuard/RoleGuard";

export const DynamicSection = ({ id, title, subTitle, description, content, imageUrl, template, onDelete, onEdit }) => {
    if (template === "imagen" && imageUrl) {
        return (
            <section className="min-h-[550px] flex items-center bg-gray-100 py-12 sm:py-0 relative">
                <RoleGuard allowedRoles={["Admin", "Recursos humanos", "Calidad", "TI", "Manufactura", "A&T"]}>
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <button
                            className="text-gray-400 hover:text-blue-500 transition-colors 
                            p-2 rounded-full hover:cursor-pointer"
                            onClick={() => onEdit(id)}
                            title="Editar contenido"
                        >
                            <FaPencilAlt size={20} />
                        </button>
                        <button
                            onClick={() => onDelete(id)}
                            className="text-gray-400 hover:text-red-500 transition-colors 
                            p-2 rounded-full hover:cursor-pointer"
                            title="Eliminar contenido"
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                </RoleGuard>
                <div className="contianer mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full max-w-md mx-auto rounded-lg shadow-2xl
                                transform -rotate-2 transition-all duration-300
                                hover:rotate-0 hover:scale-105"
                            />
                        </div>

                        <div className="order-1 md:order-2 flex flex-col justify-center space-y-6">
                            <HeaderTitle
                                title={title}
                                subtitle={subTitle}
                                description={description}
                            />
                            <p className="text-[17px] mt-3 text-gray-600 whitespace-pre-wrap leading-relaxed">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    if (template === "video" && imageUrl) {
        return (
            <section className="min-h-[550px] flex items-center bg-gray-100 py-12 sm:py-0 relative">
                <RoleGuard allowedRoles={["Admin", "Recursos humanos", "Calidad", "TI", "Manufactura", "A&T"]}>
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                        <button
                            className="text-gray-400 hover:text-blue-500 transition-colors 
                            p-2 rounded-full hover:cursor-pointer"
                            onClick={() => onEdit(id)}
                            title="Editar contenido"
                        >
                            <FaPencilAlt size={20} />
                        </button>
                        <button
                            onClick={() => onDelete(id)}
                            className="text-gray-400 hover:text-red-500 transition-colors 
                            p-2 rounded-full hover:cursor-pointer"
                            title="Eliminar contenido"
                        >
                            <FaTrash size={20} />
                        </button>
                    </div>
                </RoleGuard>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 flex justify-center">
                            <video
                                controls
                                src={imageUrl}
                                className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform"
                                poster=""
                            >
                                Tu navegador no soporta la reproducción de videos.
                            </video>
                        </div>
                        <div className="order-1 md:order-2 flex flex-col justify-center space-y-6">
                            <HeaderTitle
                                title={title}
                                subtitle={subTitle}
                                description={description}
                            />
                            <p className="text-[17px] mt-3 text-gray-600 whitespace-pre-wrap leading-relaxed">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="max-w-full mx-auto">
                <div className="relative rounded-xl shadow-lg transition-shadow hover:shadow-xl overflow-hidden p-8 md:p-12 text-center">
                    <RoleGuard allowedRoles={["Admin", "Recursos humanos", "Calidad", "TI", "Manufactura", "A&T"]}>
                        <div className="absolute top-4 left-4 z-20 flex gap-2">
                            <button
                                className="text-gray-400 hover:text-blue-500 transition-colors 
                            p-2 rounded-full hover:cursor-pointer"
                                onClick={() => onEdit(id)}
                                title="Editar contenido"
                            >
                                <FaPencilAlt size={20} />
                            </button>
                            <button
                                onClick={() => onDelete(id)}
                                className="text-gray-400 hover:text-red-500 transition-colors 
                            p-2 rounded-full hover:cursor-pointer"
                                title="Eliminar contenido"
                            >
                                <FaTrash size={20} />
                            </button>
                        </div>
                    </RoleGuard>
                    <FaBullhorn className="absolute -top-4 -right-4 text-gray-100 text-9xl transform rotate-12 -z-0" />

                    <div className="relative z-10">
                        <HeaderTitle
                            title={title}
                            subtitle={subTitle}
                            description={description}
                        />
                        <p className="mt-4 text-gray-700 text-lg whitespace-pre-wrap leading-relaxed">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}