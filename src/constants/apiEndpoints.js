export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: "/Auth/Register",
    LOGIN: "/Auth/Login",
    LOGOUT: "/Auth/Logout",
  },
  INTERNALNEWS: {
    REGISTER: "/InternalNew/CreateInternalNew",
    UPDATE: "/InternalNew/UpdateInteranlNew/",
    DELETE: "/InternalNew/DeleteInternalNew/",
    GETINTERNALNEWS: "/InternalNew/GetInternalNews",
    GETINTERNALNEWSBYID: "/InternalNew/GetInternalNewsById/",
  },
  FEATUREDCOLLABORATORS: {
    REGISTER: "/FeaturedCollaborators/CreateFeaturedCollaborators",
    GETCOLLABORATOR: "/FeaturedCollaborators/GetCollaborators",
  },
  BLOGCONTENT: {
    GETBLOGCONTENT: "/BlogContent/GetBlogContent",
    GETALLBLOGCONTENT: "/BlogContent/GetAllBlogContent",
    GETBLOGCONTENTBYID: "/BlogContent/GetBlogContentById/",
    REGISTER: "/BlogContent/Register",
    UPDATE: "/BlogContent/Edit/",
    DELETE: "/BlogContent/Delete/",
  },
};
