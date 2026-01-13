import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useState } from "react";
import dayjs from "dayjs";
import eventosMesa from "../../data/dataCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const eventStyleGetter = (event) => {
  const backgroundColor = event.color || "#3b82f6";

  return {
    style: {
      backgroundColor: backgroundColor,
      borderRadius: "6px",
      opacity: 0.9,
      color: "white",
      border: "none",
      display: "block",
      padding: "4px 8px",
      fontSize: "0.85rem",
      fontWeight: "500",
      marginBottom: "2px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };
};

const MyCustomEvent = ({ event }) => {
  return (
    <div className="flex items-center gap-2">
      {event.icon && <span>{event.icon}</span>}
      <span className="truncate">{event.title}</span>
    </div>
  );
};

const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <div className="flex items-center gap-2 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
        <button
          onClick={() => onNavigate("PREV")}
          className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => onNavigate("TODAY")}
          className="px-4 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
        >
          Hoy
        </button>
        <button
          onClick={() => onNavigate("NEXT")}
          className="p-2 hover:bg-gray-100 rounded-md text-gray-600 transition-colors"
        >
          <FaChevronRight />
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 capitalize tracking-tight">
        {label}
      </h2>

      <div className="flex bg-white p-1 rounded-lg shadow-sm border border-gray-200">
        {["month", "week"].map((v) => (
          <button
            key={v}
            onClick={() => onView(v)}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all capitalize ${
              view === v
                ? "bg-blue-50 text-blue-600 shadow-sm"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
          >
            {v === "month" ? "Mes" : v === "week" ? "Semana" : " "}
          </button>
        ))}
      </div>
    </div>
  );
};

const CalendarioPage = () => {
  const localizer = dayjsLocalizer(dayjs);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  const components = {
    event: MyCustomEvent,
    toolbar: CustomToolbar,
  };

  return (
    <>
      <section className="bg-gray-50 py-10 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
            <div className="h-[80vh] custom-calendar-wrapper">
              <Calendar
                localizer={localizer}
                events={eventosMesa}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                views={["month", "week", "agenda"]}
                view={currentView}
                date={currentDate}
                onNavigate={setCurrentDate}
                onView={setCurrentView}
                selectable
                popup={true}
                eventPropGetter={eventStyleGetter}
                components={components}
                messages={{
                  week: "Semana",
                  work_week: "Semana de trabajo",
                  day: "Día",
                  month: "Mes",
                  previous: "Atrás",
                  next: "Siguiente",
                  today: "Hoy",
                  agenda: "Agenda",
                  showMore: (total) => `+ Ver más (${total})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* FUENTE GENERAL */
        .rbc-calendar {
            font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
            color: #374151;
        }

        /* QUITAMOS BORDES DE LA TABLA PRINCIPAL */
        .rbc-month-view {
            border: 1px solid #e5e7eb !important;
            border-radius: 12px;
            overflow: hidden;
        }
        
        /* HEADER (LUN, MAR, MIE...) */
        .rbc-header {
            padding: 12px 0 !important;
            font-weight: 700 !important;
            color: #6b7280; /* gray-500 */
            border-bottom: 1px solid #e5e7eb !important;
            background-color: #f9fafb; /* gray-50 */
            font-size: 0.75rem;
            letter-spacing: 0.05em;
        }

        /* CELDAS Y LÍNEAS */
        .rbc-month-row + .rbc-month-row {
            border-top: 1px solid #e5e7eb !important;
        }
        .rbc-day-bg + .rbc-day-bg {
            border-left: 1px solid #e5e7eb !important;
        }
        
        /* DÍA ACTUAL */
        .rbc-today {
            background-color: #eff6ff !important; /* blue-50 */
        }
        
        /* DÍAS FUERA DEL MES */
        .rbc-off-range-bg {
            background-color: #fcfcfc !important;
        }

        /* --- ESTILOS DEL POPUP (VER MÁS) --- */
        .rbc-overlay {
            background-color: white !important;
            border-radius: 8px !important;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
            border: 1px solid #e5e7eb !important;
            padding: 8px !important;
            z-index: 50 !important;
        }
        .rbc-overlay-header {
            border-bottom: 1px solid #e5e7eb !important;
            margin-bottom: 8px !important;
            padding-bottom: 4px !important;
            font-weight: 700 !important;
            color: #111827;
            font-size: 0.9rem;
        }

        /* BOTÓN "+ Ver más" */
        .rbc-show-more {
            background-color: transparent !important;
            color: #2563eb !important; /* blue-600 */
            font-weight: 600 !important;
            font-size: 0.75rem !important;
            margin-top: 2px !important;
        }
        .rbc-show-more:hover {
            text-decoration: underline !important;
        }

        /* EVENTOS */
        .rbc-event {
            padding: 2px 4px !important;
        }
        .rbc-event:focus {
            outline: none !important;
        }

        /* VISTA AGENDA */
        .rbc-agenda-view table.rbc-agenda-table {
            border: none !important;
        }
        .rbc-agenda-view table.rbc-agenda-table thead > tr > th {
            border-bottom: 2px solid #e5e7eb !important;
            padding: 10px !important;
        }
        .rbc-agenda-view table.rbc-agenda-table tbody > tr > td {
            padding: 12px !important;
            border-bottom: 1px solid #f3f4f6 !important;
            color: #4b5563;
        }
        .rbc-agenda-time-cell {
            font-weight: 600;
            color: #6b7280;
        }
      `}</style>
    </>
  );
};

export default CalendarioPage;
