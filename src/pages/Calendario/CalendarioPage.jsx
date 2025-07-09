import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useState } from "react";
import dayjs from "dayjs";
import eventosMesa from "../../data/dataCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";

const eventStyleGetter = (event) => {
    const backgroundColor = event.color || "#3b82f6";
    const color = event.textColor || "white";

    return{
        style: {
            backgroundColor,
            borderRadius: "4px",
            color,
            border: "none",
            padding: "2px 5px",
            fontSize: "0.8rem"
        }
    };
};

const MyCustomEvent = ({ event }) => {
    return (
        <div className="flex items-center justify-between h-full">
        <span>{event.title}</span>
        { event.icon && <span className="text-sm">{ event.icon }</span>}
        </div>
    );
};

const components = {
    event: MyCustomEvent,
};


const CalendarioPage = () => {
    const localizer = dayjsLocalizer(dayjs);

    const[currentDate, setCurrentDate] = useState(new Date());
    const[currentView, setCurrentView] = useState("month");

    return (
        <>
            <section className="bg-gray-100 py-12 min-h-screen">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Calendario MESA
                    </h1>

                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
                        <Calendar
                            localizer={ localizer }
                            events={ eventosMesa } 
                            startAccessor="start"
                            endAccessor="end"
                            defaultView="month"
                            views={["month", "week", "day", "agenda"]}
                            view={ currentView }
                            date={ currentDate }
                            onNavigate={(newDate) => {
                                setCurrentDate(newDate);
                            }}
                            onView={(view) => {
                                setCurrentView(view);
                            }}
                            selectable
                            eventPropGetter={ eventStyleGetter }
                            components={ components }
                            style={{ height: "70vh" }}
                            className="modern-calendar"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default CalendarioPage;