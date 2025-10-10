import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import httpClient from "../httpClient";


const featuredCollaboratorsService = {
    register: (formData) => httpClient.post(API_ENDPOINTS.FEATUREDCOLLABORATORS.REGISTER, formData),
    getCollaborator: () => httpClient.get(API_ENDPOINTS.FEATUREDCOLLABORATORS.GETCOLLABORATOR)
};

export default featuredCollaboratorsService;