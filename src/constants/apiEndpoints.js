export const API_ENDPOINTS = {
    AUTH: {
        REGISTER: "/Auth/Register",
        LOGIN: "/Auth/Login"
    },
    INTERNALNEWS: {
        REGISTER: "/InternalNew/CreateInternalNew",
        GETINTERNALNEWS: "/InternalNew/GetInternalNews",
        GETINTERNALNEWSBYID: "/InternalNew/GetInternalNewsById/"
    },
    FEATUREDCOLLABORATORS: {
        REGISTER: "/FeaturedCollaborators/CreateFeaturedCollaborators",
        GETCOLLABORATOR: "/FeaturedCollaborators/GetCollaborators"
    },
    BLOGCONTENT: {
        GETBLOGCONTENT: "/BlogContent/GetBlogContent",
        REGISTER: "/BlogContent/Register",
        DELETE: "/BlogContent/Delete/"
    }
};