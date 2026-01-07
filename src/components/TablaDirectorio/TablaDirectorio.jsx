import { useState } from "react";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";

const TablaDirectorio = ({ nombreSeccion, datos, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!datos || datos.length === 0) return null;

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden 
      transition-all duration-300 hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 
        transition-colors cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-lg ${
              isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
            } transition-colors`}
          >
            {Icon ? <Icon size={20} /> : <div className="w-5 h-5" />}
          </div>
          <h2 className="text-lg font-bold text-gray-800 text-left">
            {nombreSeccion}
            <span className="block text-xs font-normal text-gray-500 mt-0.5">
              {datos.length} colaboradores
            </span>
          </h2>
        </div>

        <div
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown />
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="overflow-x-auto border-t border-gray-100">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-semibold">Nombre</th>
                <th className="px-6 py-3 font-semibold">Puesto</th>
                <th className="px-6 py-3 font-semibold">Extensión</th>
                <th className="px-6 py-3 font-semibold">Directo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {datos.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {item.nombre}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{item.puesto}</td>
                  <td className="px-6 py-4">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
                      font-medium bg-blue-100 text-blue-800"
                    >
                      {item.ext}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">
                    {item.telDirecto ? (
                      <a
                        href={`tel:${item.telDirecto}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                      >
                        <FaPhoneAlt size={10} />
                        {item.telDirecto}
                      </a>
                    ) : (
                      <span className="text-gray-300">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaDirectorio;
