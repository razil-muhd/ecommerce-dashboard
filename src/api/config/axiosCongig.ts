import axios  from "axios";
export const axiosClient = axios.create({
    baseURL:"http://localhost:5050/dashboard/api/",

});
export default axiosClient;