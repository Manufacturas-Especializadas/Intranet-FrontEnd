import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import httpClient from "../httpClient";

const authService = {
    register: (userData) => httpClient.post(API_ENDPOINTS.AUTH.REGISTER, userData),
    login: (userLogin) => httpClient.post(API_ENDPOINTS.AUTH.LOGIN, userLogin)
}

export default authService;