import { useNavigate } from "react-router-dom";
import heroCalendario from "../../assets/heroCalendario.jfif";
import { BsCalendarCheck, BsClipboardData, BsPeople } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";

const calendarContent = {
    title: "Calendario MESA",
    subtitle: "Tu guía central para eventos y plazos clave. Organiza tu participación y mantente siempre al día.",
    features: [
        {
            icon: BsCalendarCheck,
            text: "Encuentros y capacitaciones",
        },
        {
            icon: BsClipboardData,
            text: "Revisiones de avance y entregas",
        },
        {
            icon: BsPeople,
            text: "Sesiones de equipo y eventos",
        },
    ],
    buttonText: "Ver calendario completo",
};

const Calendario = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <section className="min-h-[550px] flex items-center bg-gray-50 py-12 sm:py-0">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="order-2 md:order-1">
                            <img
                                src={heroCalendario}
                                alt="calendario"
                                className="w-full max-w-md mx-auto rounded-lg shadow-2xl 
                                        transform -rotate-3 transition-all duration-300 
                                        hover:rotate-0 hover:scale-105"
                            />
                        </div>

                        <div className="order-1 md:order-2 flex flex-col justify-center space-y-6">
                            <h1
                                className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight"
                                style={{ animation: "fadeInUp 0.5s ease-out" }}
                            >
                                {calendarContent.title}
                            </h1>
                            <p
                                className="text-lg text-gray-600"
                                style={{ animation: "fadeInUp 0.5s ease-out 0.2s forwards", opacity: 0 }}
                            >
                                {calendarContent.subtitle}
                            </p>

                            <ul className="space-y-4 pt-2">
                                {calendarContent.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-700"
                                        style={{ animation: `fadeInUp 0.5s ease-out ${0.4 + index * 0.1}s forwards`, opacity: 0 }}
                                    >
                                        <feature.icon className="text-xl text-blue-500 mr-3" />
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ animation: "fadeInUp 0.5s ease-out 0.8s forwards", opacity: 0 }}>
                                <button
                                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white 
                                            font-semibold py-3 px-6 rounded-full shadow-lg transform
                                            hover:scale-105 hover:brightness-110 hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
                                    onClick={() => handleNavigate("calendario")}
                                >
                                    {calendarContent.buttonText}
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style>
                {`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </>
    );
};

export default Calendario;