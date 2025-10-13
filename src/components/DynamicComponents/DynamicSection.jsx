import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { FaBullhorn, FaTrash } from "react-icons/fa";

export const DynamicSection = ({ id, title, subTitle, description, content, imageUrl, template, onDelete }) => {
    if (template === "imagen" && imageUrl) {
        return (
            <section className="min-h-[550px] flex items-center bg-gray-100 py-12 sm:py-0 relative">

                <button
                    onClick={() => onDelete(id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full
                    z-20 hover:cursor-pointer"
                >
                    <FaTrash size={20} />
                </button>
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

    return (
        <section>
            <div className="max-w-full mx-auto">
                <div className="relative rounded-xl shadow-lg transition-shadow hover:shadow-xl overflow-hidden p-8 md:p-12 text-center">
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