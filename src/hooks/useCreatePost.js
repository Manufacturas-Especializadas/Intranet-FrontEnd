import { useState } from "react";
import Swal from "sweetalert2";
import blogContentService from "../api/services/blogContentService";

export const useCreatePost = (sectionName, onSuccess) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [mediaFiles, setMediaFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const files = Array.from(e.target.files);

    setMediaFiles((prev) => [...prev, ...files]);

    const newPreviews = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
    }));
    setPreviews((prev) => [...prev, ...newPreviews]);

    e.target.value = "";
  };

  const removeMedia = (index) => {
    URL.revokeObjectURL(previews[index].url);

    setMediaFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setMediaFiles([]);
    setPreviews([]);
    setIsExpanded(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return Swal.fire("Campos vacíos", "Agrega título y contenido", "warning");
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("template", "SocialPost");
    formData.append("PageType", sectionName);

    mediaFiles.forEach((file) => {
      formData.append("MediaFiles", file);
    });

    try {
      await blogContentService.register(formData);

      Swal.fire({
        icon: "success",
        title: "Publicado",
        text: "Tu noticia ha sido publicada correctamente",
        timer: 1500,
        showConfirmButton: false,
      });

      resetForm();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "No se pudo publicar la noticia", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isExpanded,
    setIsExpanded,
    isLoading,
    title,
    setTitle,
    content,
    setContent,
    previews,
    removeMedia,
    handleImageChange,
    handleSubmit,
  };
};
