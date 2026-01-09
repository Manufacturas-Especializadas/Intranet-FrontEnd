import { useEffect, useRef } from "react";
import { useCreatePost } from "../../hooks/useCreatePost";
import {
  FaImage,
  FaPaperPlane,
  FaTimes,
  FaVideo,
  FaUserCircle,
  FaSave,
  FaBan,
  FaPencilAlt,
} from "react-icons/fa";

export const CreatePostWidget = ({
  onPostCreated,
  sectionName,
  postToEdit,
  isEditing,
  onCancelEdit,
  onPostUpdated,
}) => {
  const {
    isExpanded,
    setIsExpanded,
    isLoading,
    title,
    setTitle,
    content,
    setContent,
    previews,
    setPreviews,
    mediaFiles,
    setMediaFiles,
    removeMedia,
    handleImageChange,
    handleSubmit,
    resetForm,
    mediaIdsToDelete,
  } = useCreatePost(sectionName, onPostCreated);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && postToEdit) {
      setIsExpanded(true);
      setTitle(postToEdit.title);
      setContent(postToEdit.content);

      if (postToEdit.blogMedia && postToEdit.blogMedia.length > 0) {
        const existingPreviews = postToEdit.blogMedia.map((m) => ({
          url: m.url,
          type: m.mediaType === "video" ? "video" : "image",
          isExisting: true,
          id: m.id,
        }));
        if (setPreviews) setPreviews(existingPreviews);
      }
    }
  }, [isEditing, postToEdit, setTitle, setContent, setPreviews, setIsExpanded]);

  const handleRemoveItem = (index) => {
    removeMedia(index);
  };

  const handleCancelEdit = () => {
    resetForm();
    if (onCancelEdit) onCancelEdit();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("PageType", sectionName);
      formData.append("template", postToEdit.template || "SocialPost");

      if (mediaFiles && mediaFiles.length > 0) {
        mediaFiles.forEach((file) => {
          formData.append("MediaFiles", file);
        });
      }

      if (mediaIdsToDelete && mediaIdsToDelete.length > 0) {
        mediaIdsToDelete.forEach((id) => {
          formData.append("MediaIdsToDelete", id);
        });
      }

      await onPostUpdated(postToEdit.id, formData);
      resetForm();
    } else {
      handleSubmit(e);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-md p-4 mb-6 border transition-all duration-300 ${
        isEditing ? "border-blue-400 ring-2 ring-blue-100" : "border-gray-200"
      }`}
    >
      {!isExpanded ? (
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setIsExpanded(true)}
        >
          <div
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 
            flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform"
          >
            <FaUserCircle size={24} />
          </div>
          <div
            className="flex-1 bg-gray-100 group-hover:bg-gray-200 rounded-full py-2.5 px-4 text-gray-500 
            transition-colors duration-200"
          >
            ¿Qué hay de nuevo en {sectionName}?
          </div>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="animate-fade-in-down">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
            <h3 className="text-lg font-bold text-gray-700 uppercase flex items-center gap-2">
              {isEditing ? (
                <>
                  <FaPencilAlt className="text-blue-500" /> Editando Publicación
                </>
              ) : (
                "Crear publicación"
              )}
            </h3>

            <button
              type="button"
              onClick={
                isEditing ? handleCancelEdit : () => setIsExpanded(false)
              }
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors 
              hover:cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Título de la noticia..."
              className="w-full text-lg font-bold placeholder-gray-400 border-none focus:ring-0 px-0 outline-none 
              bg-transparent uppercase"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus={!isEditing}
            />

            <textarea
              placeholder="Escribe todo el detalle aquí..."
              className="w-full min-h-[120px] resize-none border-none focus:ring-0 text-gray-600 px-0 text-base 
              outline-none bg-transparent leading-relaxed"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {previews.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 animate-fade-in">
                {previews.map((item, index) => (
                  <div
                    key={index}
                    className="relative group rounded-lg overflow-hidden border border-gray-200 aspect-square 
                    bg-gray-50"
                  >
                    {item.type === "video" ? (
                      <div className="w-full h-full flex items-center justify-center bg-gray-900">
                        <video
                          src={item.url}
                          className="w-full h-full object-cover opacity-80"
                        />
                        <FaVideo className="absolute text-white text-3xl opacity-80" />
                      </div>
                    ) : (
                      <img
                        src={item.url}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => handleRemoveItem(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 
                      shadow-md hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div>
              <button
                type="button"
                onClick={() => fileInputRef.current.click()}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 
                px-3 py-2 rounded-lg transition-colors font-medium cursor-pointer"
              >
                <FaImage className="text-xl" />
                <span>Fotos / Videos</span>
              </button>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*,video/*"
                className="hidden"
                multiple
              />
            </div>

            <div className="flex gap-2">
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 font-medium 
                        hover:bg-gray-100 transition-all cursor-pointer"
                >
                  <span>Cancelar</span>
                  <FaBan className="text-sm" />
                </button>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg text-white font-medium 
                    shadow-md transition-all hover:cursor-pointer
                ${
                  isLoading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? (
                  "Procesando..."
                ) : (
                  <>
                    <span>{isEditing ? "Guardar Cambios" : "Publicar"}</span>
                    {isEditing ? (
                      <FaSave className="text-sm" />
                    ) : (
                      <FaPaperPlane className="text-sm" />
                    )}
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
