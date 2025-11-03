import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import httpClient from "../httpClient";


const internalNewSerivce = {
    register: (formData) => httpClient.post(API_ENDPOINTS.INTERNALNEWS.REGISTER, formData),
    update: (formData, id) => httpClient.put(`${API_ENDPOINTS.INTERNALNEWS.UPDATE}${id}`, formData),
    delete: (id) => httpClient.delete(`${API_ENDPOINTS.INTERNALNEWS.DELETE}${id}`),
    getInternalNewById: (id) => httpClient.get(`${API_ENDPOINTS.INTERNALNEWS.GETINTERNALNEWSBYID}${id}`),
    getInernalNews: () => httpClient.get(API_ENDPOINTS.INTERNALNEWS.GETINTERNALNEWS),
};

export default internalNewSerivce;