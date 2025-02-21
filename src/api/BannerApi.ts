import axiosClient from "./config/axiosCongig";

export const BannerApi = {
  createBanner: async function (body: any) {
    const accessToken = window.localStorage.getItem("accesstoken");
    return await axiosClient.post("banners/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
         "Authorization": `Bearer ${accessToken}`
      },
    });
  },
   getAllBanners: async function (accessToken?:string) {
      return await axiosClient.get("banners/get-all",{
        headers:{
          "Authorization": `Bearer ${accessToken}`
        }
      });
      
    },
      getoneBanners: async function (id:string,accessToken?:string) {
        return await axiosClient.get(`banners/get-one/${id}`,{
          headers:{
            "Authorization": `Bearer ${accessToken}`
          }
        });
        
      },
      updateBanners: async function (body: any,id:string) {
        const accessToken = window.localStorage.getItem("accesstoken");
        return await axiosClient.put(`banners/update/${id}`, body, {
          headers: {
            "Content-Type": "multipart/form-data",
               "Authorization": `Bearer ${accessToken}`
          }
        })
    },
    deleteBanner: async function (id:string) {
      const accessToken = window.localStorage.getItem("accesstoken");
      return await axiosClient.delete(`banners/delete/${id}`,{
        headers:{
           "Authorization": `Bearer ${accessToken}`
    
        }
      });
      
    },
}