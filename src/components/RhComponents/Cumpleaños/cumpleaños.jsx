import { useEffect, useState } from "react";
import { dateBirthDay } from "../../../data/dataCumpleaños";
import { CiGift } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const Cumpleaños = () => {
    const [today, setToday] = useState(new Date());
    const [nextBirthday, setNextBirthday] = useState(null);
    const [daysUntil, setDaysUntil] = useState(0);

    const parseMexicanDate = (dateString) => {
        const [day, month, year] = dateString.split('/').map(Number);
        const fullYear = year < 1000 ? 2000 + year : year;
        return new Date(fullYear, month - 1, day);
    };

    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    };

    const calculateDaysUntil = (birthday) => {
        const bdayDate = parseMexicanDate(birthday);
        const currentYear = today.getFullYear();

        const nextBday = new Date(currentYear, bdayDate.getMonth(), bdayDate.getDate());

        if (nextBday < today) {
            nextBday.setFullYear(currentYear + 1);
        }

        const diffTime = nextBday - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    useEffect(() => {
        const upcoming = dateBirthDay
            .filter(bday => calculateDaysUntil(bday.day) > 0)
            .sort((a, b) => calculateDaysUntil(a.day) - calculateDaysUntil(b.day))[0];

        setNextBirthday(upcoming);
        if (upcoming) {
            setDaysUntil(calculateDaysUntil(upcoming.day));
        }
    }, [today]);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold text-indigo-800 mb-4">
                            ¡Felices Cumpleaños!
                        </h1>
                        <p className="text-lg text-gray-600">
                            En MESA celebramos a nuestros colaboradores. Hoy es {' '}
                            <span className="text-pink-600 font-semibold">{formatDate(today)}</span>
                        </p>
                    </header>

                    {nextBirthday ? (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl hover:scale-[1.02]">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-center text-white">
                                <div className="flex justify-center mb-4">
                                    <LiaBirthdayCakeSolid size={50} />
                                </div>
                                <h2 className="text-2xl font-semibold">Próximo Cumpleaños</h2>
                            </div>

                            <div className="p-8 text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-3xl font-bold text-indigo-700">{daysUntil}</span>
                                        </div>
                                        <div className="absolute -top-2 -right-2">
                                            <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-lg">
                                                <CiGift size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{nextBirthday.name}</h3>
                                <p className="text-lg text-gray-600 mb-6">
                                    {formatDate(parseMexicanDate(nextBirthday.day))}
                                </p>

                                <div className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full text-lg font-medium inline-block">
                                    {daysUntil === 1
                                        ? "¡Mañana es su cumpleaños!"
                                        : `Faltan ${daysUntil} días`}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">
                            <div className="flex justify-center mb-6">
                                <LiaBirthdayCakeSolid size={60} className="text-gray-400" />
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-4">No hay próximos cumpleaños</h2>
                            <p className="text-lg text-gray-600">Todos los cumpleaños de este año ya han pasado.</p>
                        </div>
                    )}

                    <footer className="text-center mt-12 text-gray-500">
                        <p>© {new Date().getFullYear()} MESA - Celebrando juntos</p>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Cumpleaños