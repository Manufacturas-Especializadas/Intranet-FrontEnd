import { useAllBlogPosts } from "../../hooks/useAllBlogPosts";
import HeaderTitle from "../HeaderTitle/HeaderTitle";
import { FaRegNewspaper, FaArrowRight, FaImage } from "react-icons/fa";
import { BirthdayWidget } from "../Widgets/BirthdayWidget/BirthdayWidget";
import { NextEventsWidget } from "../Widgets/NextEventsWidget/NextEventsWidget";
import { dateBirthDay } from "../../data/dataCumpleaños";
import { PostDetailModal } from "../../components/DynamicComponents/PostDetailModal";

import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

const Noticias = () => {
  const {
    posts,
    isLoading,
    openPostDetail,
    closePostDetail,
    isDetailOpen,
    selectedPost,
  } = useAllBlogPosts();

  const handleCardClick = (post) => {
    if (openPostDetail) {
      openPostDetail(post);
    } else {
      console.error("openPostDetail no está definido en el hook");
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <HeaderTitle
          title="Novedades MESA"
          subtitle="Mantente al día con lo que sucede en la empresa"
          description="Un espacio unificado para noticias, eventos y celebraciones de nuestro equipo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaRegNewspaper className="text-blue-600" /> Últimas Noticias
              </h2>
            </div>

            {isLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-40 bg-gray-200 rounded-xl"></div>
                <div className="h-40 bg-gray-200 rounded-xl"></div>
              </div>
            ) : posts && posts.length > 0 ? (
              posts.map((post) => {
                const mediaList = post.blogMedia || [];
                const coverImage =
                  mediaList.find((m) => m.mediaType === "image")?.url ||
                  post.img;

                return (
                  <div
                    key={post.id}
                    onClick={() => handleCardClick(post)}
                    className="block group bg-white rounded-xl shadow-sm border border-gray-200 
                    overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div
                        className="md:w-48 h-48 md:h-auto bg-gray-100 
                        flex items-center justify-center shrink-0 relative overflow-hidden"
                      >
                        {coverImage ? (
                          <img
                            src={coverImage}
                            alt={post.title || "Noticia"}
                            className="w-full h-full object-cover transition-transform duration-500 
                            group-hover:scale-105"
                          />
                        ) : (
                          <div
                            className="w-full h-full bg-gradient-to-br from-[#00B0F5] 
                            to-[#0081C9] flex items-center justify-center"
                          >
                            <FaRegNewspaper
                              size={40}
                              className="text-white/80"
                            />
                          </div>
                        )}

                        {mediaList.length > 1 && (
                          <div
                            className="absolute bottom-2 right-2 bg-black/50 text-white 
                            text-xs px-2 py-1 rounded flex items-center gap-1"
                          >
                            <FaImage /> +{mediaList.length}
                          </div>
                        )}
                      </div>

                      <div className="p-6 flex flex-col justify-center flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="bg-blue-100 text-blue-700 text-xs font-bold px-2 
                            py-0.5 rounded-full uppercase truncate max-w-[150px]"
                          >
                            {post.pageType || "Noticia"}
                          </span>

                          <span className="text-gray-400 text-xs shrink-0 capitalize">
                            {post.createdAt
                              ? dayjs(post.createdAt).format("D [de] MMM, YYYY")
                              : "Fecha desconocida"}
                          </span>
                        </div>

                        <h3
                          className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 
                          transition-colors line-clamp-1"
                        >
                          {post.title || "Sin título"}
                        </h3>

                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {post.content || "Sin contenido disponible."}
                        </p>

                        <div className="flex items-center text-blue-600 text-sm font-semibold mt-auto">
                          Leer nota completa
                          <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">
                  No hay noticias recientes para mostrar.
                </p>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <BirthdayWidget employees={dateBirthDay} />
            <NextEventsWidget />
          </aside>
        </div>
      </div>

      {isDetailOpen && selectedPost && (
        <PostDetailModal
          isOpen={isDetailOpen}
          onClose={closePostDetail}
          post={selectedPost}
          sectionName="Noticias"
        />
      )}
    </section>
  );
};

export default Noticias;
