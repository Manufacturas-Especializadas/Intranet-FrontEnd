import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import httpClient from "../httpClient";


const internalNewSerivce = {
    register: (formData) => httpClient.post(API_ENDPOINTS.INTERNALNEWS.REGISTER, formData),
    getInternalNewById: (id) => httpClient.get(`${API_ENDPOINTS.INTERNALNEWS.GETINTERNALNEWSBYID}${id}`),
    getInernalNews: () => httpClient.get(API_ENDPOINTS.INTERNALNEWS.GETINTERNALNEWS),
};

export default internalNewSerivce;