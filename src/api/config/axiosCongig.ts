import { baseUrl } from "@/utils/baseurl";
import axios  from "axios";
export const axiosClient = axios.create({
    baseURL: baseUrl,

});
export default axiosClient;