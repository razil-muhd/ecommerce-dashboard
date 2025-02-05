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
//       getoneBrands: async function (id:string) {
//         return await axiosClient.get(`brands/get-one/${id}`);
        
//       },
//       updateBrands: async function (body: any,id:string) {
//         return await axiosClient.put(`brands/update/${id}`, body, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           }
//         })
//     },
    // deleteBrands: async function (id:string) {
    //   return await axiosClient.delete(`brands/delete/${id}`);
      
    // },
}