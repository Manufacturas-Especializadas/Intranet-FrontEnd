import { useEffect } from "react";
import { FaTimes, FaUserCircle, FaRegClock } from "react-icons/fa";

export const PostDetailModal = ({ isOpen, onClose, post }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !post) return null;

  const mediasFromList = post.blogMedia || [];
  let mediaList = [...mediasFromList];
  if (mediaList.length === 0 && post.img) {
    mediaList.push({ url: post.img, mediaType: "image" });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 
      backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] 
        flex flex-col animate-scale-in overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 
              flex items-center justify-center text-white shadow-sm"
            >
              <FaUserCircle size={26} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg leading-none">
                Capacitación
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <div className="flex items-center gap-1">
                  <FaRegClock size={14} />
                  <span>Reciente</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors
            hover:cursor-pointer"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar bg-white">
          {post.title && (
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h2>
          )}
          <div className="prose max-w-none text-gray-700 text-lg whitespace-pre-line leading-relaxed mb-8">
            {post.content}
          </div>

          {/* Galería Vertical de Medios */}
          <div className="space-y-6">
            {mediaList.map((item, index) => {
              const isVideo = item.mediaType?.toLowerCase() === "video";
              return (
                <div
                  key={index}
                  className="w-full rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm"
                >
                  {isVideo ? (
                    <video
                      src={item.url}
                      controls
                      className="w-full max-h-[80vh] mx-auto bg-black block"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt=""
                      className="w-full h-auto max-h-[80vh] object-contain mx-auto block"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg 
            hover:bg-gray-50 font-medium shadow-sm hover:cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
