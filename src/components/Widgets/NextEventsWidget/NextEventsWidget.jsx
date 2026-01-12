import { FaCalendar, FaClock } from "react-icons/fa";
import eventosMesa from "../../../data/dataCalendar";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

export const NextEventsWidget = () => {
  const eventosFuturos = eventosMesa
    .filter((e) => dayjs(e.start).isAfter(dayjs().subtract(1, "day")))
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 4);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-3">
        <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
          <FaCalendar /> Próximos eventos
        </h3>
      </div>

      <div className="p-0">
        {eventosFuturos.map((evento, index) => {
          const fechaInicio = dayjs(evento.start);

          return (
            <div
              key={index}
              className="flex gap-3 p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-lg w-12 h-12 shrink-0 border border-blue-100">
                <span className="text-[10px] font-bold uppercase leading-none mt-1">
                  {fechaInicio.format("MMM").replace(".", "")}
                </span>
                <span className="text-lg font-bold leading-none">
                  {fechaInicio.format("DD")}
                </span>
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h4
                  className="text-sm font-bold text-gray-800 truncate"
                  title={evento.title}
                >
                  {evento.title}
                </h4>

                <div className="inline-flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <FaClock size={10} />
                  <span>{fechaInicio.format("h:mm A")}</span>
                </div>
              </div>
            </div>
          );
        })}

        {eventosFuturos.length === 0 && (
          <div className="p-4 text-center text-gray-400 text-sm">
            No hay eventos próximos
          </div>
        )}
      </div>
    </div>
  );
};
