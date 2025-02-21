import { access } from "fs";
import axiosClient from "./config/axiosCongig";

export const CategoryApi = {
  createCategory: async function (body: any) {
    const accessToken = window.localStorage.getItem("accesstoken");
    return await axiosClient.post("categories/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`
      },

    });
  },
  getAllCategory: async function (accessToken?:string ) {
  
    return await axiosClient.get("categories/get-all",{
      headers:{
        "Authorization": `Bearer ${accessToken}`
      }
    });
    
  },
  getoneCategory: async function (id:string,accessToken?:string) {
    return await axiosClient.get(`categories/get-one/${id}`,{
      headers:{
        "Authorization": `Bearer ${accessToken}`
      }
    });
    
  },
  updateCategory: async function (body: any,id:string) {
    const accessToken = window.localStorage.getItem("accesstoken");
    return await axiosClient.put(`categories/update/${id}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${accessToken}`
      }
    })
},
deleteCategory: async function (id:string) {
  const accessToken = window.localStorage.getItem("accesstoken");
  return await axiosClient.delete(`categories/delete/${id}`,{
    headers:{
       "Authorization": `Bearer ${accessToken}`

    }
  });
  
},
}
  