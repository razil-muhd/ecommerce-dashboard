import axiosClient from "./config/axiosCongig";

export const BannerApi = {
  createBanner: async function (body: any) {
    return await axiosClient.post("banners/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
   getAllBanners: async function () {
      return await axiosClient.get("banners/get-all");
      
    },
      getoneBanners: async function (id:string) {
        return await axiosClient.get(`banners/get-one/${id}`);
        
      },
      updateBanners: async function (body: any,id:string) {
        return await axiosClient.put(`banners/update/${id}`, body, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
    },
    deleteBanner: async function (id:string) {
      return await axiosClient.delete(`banners/delete/${id}`);
      
    },
}