import Hero from "../../components/CalidadComponentes/Hero/Hero";
import { RoleGuard } from "../../components/RoleGuard/RoleGuard";
import { useBlogPosts } from "../../hooks/useBlogPosts";
import { CreatePostWidget } from "../../components/DynamicComponents/CreatePostWidget";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { DynamicSection } from "../../components/DynamicComponents/DynamicSection";
import { PostDetailModal } from "../../components/DynamicComponents/PostDetailModal";
import { dateFormats, formatDate } from "../../utils/dateFormatter";

const Calidad = () => {
  const {
    posts,
    isLoading,
    fetchPost,
    deletePost,
    selectedPost,
    isDetailOpen,
    openPostDetail,
    closePostDetail,
  } = useBlogPosts("Calidad");

  return (
    <>
      <Hero />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <RoleGuard allowedRoles={["Admin", "Calidad"]}>
          <CreatePostWidget onPostCreated={fetchPost} sectionName="Calidad" />
        </RoleGuard>

        <div className="space-y-6">
          {isLoading ? (
            <LoadingSpinner />
          ) : posts.length === 0 ? (
            <div
              className="text-center py-20 bg-gray-50 rounded-lg 
              border border-dashed border-gray-300"
            >
              <p>Aún no hay noticias publicadas.</p>
            </div>
          ) : (
            posts.map((post) => (
              <>
                <div
                  key={post.id}
                  onClick={() => openPostDetail(post)}
                  className="transition-transform hover:scale-[1.005]"
                >
                  <DynamicSection
                    id={post.id}
                    onDelete={(e) => {
                      e.stopPropagation();
                      deletePost(post.id);
                    }}
                    title={post.title}
                    blogMedias={post.blogMedia}
                    imageUrl={post.img}
                    content={post.content}
                    template={post.template}
                    isPreview={true}
                    creationDate={formatDate(
                      post.createdAt,
                      dateFormats.shortDate
                    )}
                    sectionName="Calidad"
                  />
                </div>

                <PostDetailModal
                  isOpen={isDetailOpen}
                  onClose={closePostDetail}
                  post={selectedPost}
                  creationDate={formatDate(
                    post.createdAt,
                    dateFormats.shortDate
                  )}
                  sectionName="Calidad"
                />
              </>
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default Calidad;
