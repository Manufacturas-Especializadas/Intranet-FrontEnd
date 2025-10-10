import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { MdSecurity, MdBiotech } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { BsPersonRaisedHand, BsPersonArmsUp } from "react-icons/bs";
import { FaPersonRays, FaPersonCircleCheck } from "react-icons/fa6";
import { RiCustomerService2Line, RiTeamFill } from "react-icons/ri";

const valoresData = [
    {
        icon: MdSecurity,
        title: "Seguridad",
        description: "Priorizamos el bienestar de nuestro equipo y la protección de nuestros activos.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: FaBalanceScale,
        title: "Ética",
        description: "Actuamos con integridad y transparencia en todas nuestras interacciones.",
        color: "bg-red-100 text-red-600",
    },
    {
        icon: BsPersonArmsUp,
        title: "Disciplina",
        description: "Cumplimos nuestros compromisos con constancia y enfoque en los resultados.",
        color: "bg-yellow-100 text-yellow-600",
    },
    {
        icon: BsPersonRaisedHand,
        title: "Confianza",
        description: "Construimos relaciones sólidas basadas en el respeto y la credibilidad.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: FaPersonRays,
        title: "Lealtad",
        description: "Estamos comprometidos con el éxito de nuestra empresa y nuestros clientes.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: MdBiotech,
        title: "Innovación",
        description: "Buscamos constantemente nuevas y mejores formas de hacer las cosas.",
        color: "bg-teal-100 text-teal-600",
    },
    {
        icon: RiCustomerService2Line,
        title: "Servicio al Cliente",
        description: "Nos esforzamos por superar las expectativas y necesidades de nuestros clientes.",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        icon: FaPersonCircleCheck,
        title: "Honestidad",
        description: "Nos comunicamos con la verdad, siendo coherentes en nuestro pensar y actuar.",
        color: "bg-pink-100 text-pink-600",
    },
    {
        icon: RiTeamFill,
        title: "Trabajo en Equipo",
        description: "Colaboramos para alcanzar metas comunes, valorando cada contribución.",
        color: "bg-sky-100 text-sky-600",
    },
];

const Valores = () => {
    return (
        <section className="py-10 lg:py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <HeaderTitle
                    title="Valores MESA"
                    subtitle="Los pilares que guían cada una de nuestras acciones"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {valoresData.map((valor, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-transparent 
                                    hover:border-blue-500 hover:shadow-lg hover:-translate-y-2 
                                    transition-all duration-300 ease-in-out"
                        >
                            <div className="flex items-center space-x-4">
                                <div className={`p-4 rounded-full ${valor.color}`}>
                                    <valor.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {valor.title}
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-600 text-base">
                                {valor.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Valores;