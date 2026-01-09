import { useState } from "react";
import TablaDirectorio from "../../components/TablaDirectorio/TablaDirectorio";
import {
  FaSearch,
  FaBuilding,
  FaShippingFast,
  FaChartLine,
  FaCheckDouble,
  FaLaptopCode,
  FaUserTie,
  FaIndustry,
  FaHardHat,
  FaBoxOpen,
  FaShieldAlt,
} from "react-icons/fa";

// Importa tus datos (asegúrate que las rutas estén bien)
import {
  calidad,
  direcciónGeneral,
  logisticaYPlaneacion,
  finanzas,
  sistemas,
  iso,
  ventas,
  produccion,
  recursosHumanos,
  manufactura,
  ehsYResponsabilidadSocial,
  mantenimiento,
  materiales,
  ingeneriaDeProducto,
  almacen,
  vigilancia,
  embarques,
} from "../../data/dataDirectorio";

const DirectorioPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const secciones = [
    { title: "Dirección General", data: direcciónGeneral, icon: FaUserTie },
    {
      title: "Logística y Planeación",
      data: logisticaYPlaneacion,
      icon: FaShippingFast,
    },
    { title: "Finanzas", data: finanzas, icon: FaChartLine },
    { title: "Calidad", data: calidad, icon: FaCheckDouble },
    { title: "Sistemas", data: sistemas, icon: FaLaptopCode },
    { title: "ISO", data: iso, icon: FaCheckDouble },
    { title: "Ventas", data: ventas, icon: FaChartLine },
    { title: "Producción", data: produccion, icon: FaIndustry },
    { title: "Recursos Humanos", data: recursosHumanos, icon: FaUserTie },
    { title: "Manufactura", data: manufactura, icon: FaIndustry },
    {
      title: "Seguridad Patrimonial",
      data: ehsYResponsabilidadSocial,
      icon: FaShieldAlt,
    },
    { title: "Mantenimiento", data: mantenimiento, icon: FaHardHat },
    { title: "Cadena de Suministros", data: materiales, icon: FaBoxOpen },
    {
      title: "Ingeniería de Producto",
      data: ingeneriaDeProducto,
      icon: FaLaptopCode,
    },
    { title: "Almacén", data: almacen, icon: FaBoxOpen },
    { title: "Vigilancia", data: vigilancia, icon: FaShieldAlt },
    { title: "Embarques", data: embarques, icon: FaShippingFast },
  ];

  const seccionesFiltradas = secciones
    .map((seccion) => {
      const datosFiltrados = seccion.data.filter((persona) => {
        const nombre = persona.nombre?.toLowerCase() || "";
        const puesto = persona.puesto?.toLowerCase() || "";
        const extension = persona.ext?.toString() || "";

        const termino = searchTerm.toLowerCase();

        return (
          nombre.includes(termino) ||
          puesto.includes(termino) ||
          extension.includes(termino)
        );
      });
      return { ...seccion, data: datosFiltrados };
    })
    .filter((seccion) => seccion.data.length > 0);

  return (
    <section className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Directorio Corporativo
          </h1>
          <p className="text-gray-500 mb-8">
            Encuentra rápidamente la extensión o contacto de cualquier
            colaborador.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por nombre, puesto o extensión..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 shadow-sm 
              focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all 
              text-gray-700 bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {seccionesFiltradas.length > 0 ? (
            seccionesFiltradas.map((seccion, index) => (
              <TablaDirectorio
                key={index}
                nombreSeccion={seccion.title}
                datos={seccion.data}
                icon={seccion.icon}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                No se encontraron resultados para "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DirectorioPage;
