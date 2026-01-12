import { useCallback, useEffect, useState } from "react";
import blogContentService from "../api/services/blogContentService";

export const useAllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const fetchAllPosts = useCallback(async () => {
    try {
      const response = await blogContentService.blogContentAll();
      const data = response.data || response;

      const sortedData = data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setPosts(sortedData);
    } catch (error) {
      console.error("Error fetching all posts:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllPosts();
  }, [fetchAllPosts]);

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
    fetchAllPosts,
    selectedPost,
    isDetailOpen,
    openPostDetail,
    closePostDetail,
  };
};
