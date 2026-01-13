import { useMemo } from "react";
import { FaBirthdayCake, FaGift } from "react-icons/fa";

export const BirthdayWidget = ({ employees = [] }) => {
  const upcomingBirthDays = useMemo(() => {
    if (!employees.length) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const currentYear = today.getFullYear();

    const sorted = employees.map((emp) => {
      // Aseguramos que split funcione
      if (!emp.day) return { ...emp, diffDays: 999 };

      const [day, month] = emp.day.split("/");

      let nextBirthday = new Date(
        currentYear,
        parseInt(month) - 1,
        parseInt(day)
      );

      // Si ya pasó este año, calculamos para el siguiente
      if (nextBirthday < today) {
        nextBirthday.setFullYear(currentYear + 1);
      }

      const diffTime = nextBirthday - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return { ...emp, nextBirthday, diffDays };
    });

    return sorted.sort((a, b) => a.diffDays - b.diffDays).slice(0, 3);
  }, [employees]);

  if (upcomingBirthDays.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-3 flex items-center justify-between">
        <h3 className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2">
          <FaBirthdayCake /> Cumpleaños
        </h3>
      </div>

      <div className="divide-y divide-gray-100">
        {upcomingBirthDays.map((emp) => (
          <div
            key={emp.id}
            className="p-4 flex items-center gap-3 hover:bg-pink-50 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg shadow-sm border border-pink-200">
              {emp.name.charAt(0)}
            </div>

            <div className="min-w-0 flex-1">
              <p
                className="text-gray-800 font-semibold text-sm truncate"
                title={emp.name}
              >
                {emp.name}
              </p>
              <p className="text-xs text-pink-500 font-medium">
                {emp.diffDays === 0
                  ? "¡Es hoy! 🎂"
                  : emp.diffDays === 1
                  ? "Mañana"
                  : `En ${emp.diffDays} días (${emp.day.substring(0, 5)})`}
              </p>
            </div>

            {emp.diffDays === 0 && (
              <FaGift className="ml-auto text-pink-500 animate-bounce shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
