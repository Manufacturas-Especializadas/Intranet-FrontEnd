import {
    TicketIcon,
    BookOpenIcon,
    UserGroupIcon,
    CalendarDaysIcon
} from "@heroicons/react/24/outline";
import { EnlaceCard } from "./EnlaceCard";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const linkList = [
    {
        id: 1,
        title: "Sistema de Tickets",
        href: "https://delightful-river-0032fef10.2.azurestaticapps.net",
        Icon: TicketIcon
    },
    {
        id: 2,
        title: "DAMESAIdea",
        href: "https://lively-forest-01f0c7010.1.azurestaticapps.net",
        Icon: BookOpenIcon
    }
];

export const EnlacesRapidos = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <HeaderTitle
                        title="Herramientas del día a día"
                        subtitle="Enlaces Rápidos"
                    />
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-lg lg:mx-auto">
                    {
                        linkList.map((link) => (
                            <EnlaceCard
                                key={link.id}
                                href={link.href}
                                Icon={link.Icon}
                                title={link.title}
                            />
                        ))
                    }
                </div>
                <div className="mt-12 text-center">
                    <p className="text-base text-gray-500 italic">
                        ¡Próximamente más herramientas!
                    </p>
                </div>
            </div>
        </section>
    );
};