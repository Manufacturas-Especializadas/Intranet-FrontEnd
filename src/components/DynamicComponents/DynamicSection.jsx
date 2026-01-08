import { FaPencilAlt, FaRegClock, FaTrash, FaUserCircle } from "react-icons/fa";
import { RoleGuard } from "../RoleGuard/RoleGuard";

export const DynamicSection = ({
  id,
  title,
  content,
  onDelete,
  onEdit,
  sectionName,
  isPreview = false,
}) => {
  const renderContent = () => {
    if (!content) return null;

    if (isPreview) {
      return content.length > 200 ? content.slice(0, 200) + "..." : content;
    }
    return content;
  };

  return (
    <article
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 
      hover:shadow-md transition-all duration-200 group h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 
            flex items-center justify-center text-white shadow-sm"
          >
            <FaUserCircle size={24} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base leading-tight">
              {sectionName}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
              <div className="flex items-center gap-1">
                <FaRegClock />
                <span>Reciente</span>
              </div>
            </div>
          </div>
        </div>

        <RoleGuard
          allowedRoles={["Admin", "Recursos humanos", "Capacitación", "TI"]}
        >
          <div
            className="flex gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onEdit(id)}
              className="p-2 text-gray-400 hover:text-blue-600 rounded-full"
            >
              <FaPencilAlt size={16} />
            </button>
            <button
              onClick={() => onDelete(id)}
              className="p-2 text-gray-400 hover:text-red-600 rounded-full"
            >
              <FaTrash size={16} />
            </button>
          </div>
        </RoleGuard>
      </div>

      <div className="mt-2 flex-grow">
        {title && (
          <h4
            className={`font-bold text-gray-800 mb-2 ${
              isPreview ? "text-lg" : "text-2xl"
            }`}
          >
            {title}
          </h4>
        )}

        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {renderContent()}
        </p>

        {isPreview && content && content.length > 200 && (
          <span className="inline-block mt-2 text-blue-600 font-medium text-sm hover:underline cursor-pointer">
            Ver más...
          </span>
        )}
      </div>
    </article>
  );
};
