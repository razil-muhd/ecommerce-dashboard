import axiosClient from "./config/axiosCongig";

export const  AuthApi = {
    login: async function (body:any) {
        return await axiosClient.post("auth/login",body);
        
    }

}