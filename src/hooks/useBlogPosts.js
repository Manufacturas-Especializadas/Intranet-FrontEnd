import { useCallback, useEffect, useState } from "react";
import blogContentService from "../api/services/blogContentService";
import Swal from "sweetalert2";

export const useBlogPosts = (sectionName) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const fetchPost = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await blogContentService.blogContent(sectionName);

      const data = response.data || response;

      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setPosts(sortedData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [sectionName]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const deletePost = async (id) => {
    const result = await Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, ¡eliminar!",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        await blogContentService.delete(id);
        await fetchPost();
        Swal.fire("¡Eliminado!", "La publicación ha sido eliminada", "success");
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "No se pudo eliminar", "error");
      }
    }
  };

  const openPostDetail = (post) => {
    setSelectedPost(post);
    setIsDetailOpen(true);
  };

  const closePostDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  return {
    posts,
    isLoading,
    fetchPost,
    deletePost,
    selectedPost,
    isDetailOpen,
    openPostDetail,
    closePostDetail,
  };
};
