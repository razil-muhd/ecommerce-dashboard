import axiosClient from "./config/axiosCongig";

export const BrandApi = {
  brandCategory: async function (body: any) {
    const accessToken = window.localStorage.getItem("accesstoken");
    return await axiosClient.post("brands/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${accessToken}`
      },
    });
  },
   getAllBrands: async function (accessToken?:string) {
      return await axiosClient.get("brands/get-all" ,{
        headers:{
          "Authorization": `Bearer ${accessToken}`
        }
      });
      
    },
      getoneBrands: async function (id:string,accessToken?:string) {
        return await axiosClient.get(`brands/get-one/${id}`,{
          headers:{
            "Authorization": `Bearer ${accessToken}`
          }
        });
        
      },
      updateBrands: async function (body: any,id:string) {
        const accessToken = window.localStorage.getItem("accesstoken");

        return await axiosClient.put(`brands/update/${id}`, body, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${accessToken}`
          }
        })
    },
    deleteBrands: async function (id:string) {
      const accessToken = window.localStorage.getItem("accesstoken");
      return await axiosClient.delete(`brands/delete/${id}`,{
        headers:{
           "Authorization": `Bearer ${accessToken}`
    
        }
      });
      
    },
}