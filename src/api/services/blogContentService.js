import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import httpClient from "../httpClient";


const blogContentService = {
    blogContent: (pageType) => {
        return httpClient.get(`${API_ENDPOINTS.BLOGCONTENT.GETBLOGCONTENT}?pageType=${encodeURIComponent(pageType)}`);
    },
    register: (formData) => httpClient.post(API_ENDPOINTS.BLOGCONTENT.REGISTER, formData),
    delete: (id) => httpClient.delete(`${API_ENDPOINTS.BLOGCONTENT.DELETE}${id}`)
}

export default blogContentService;