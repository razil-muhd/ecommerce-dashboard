import axiosClient from "./config/axiosCongig";

export const BrandApi = {
  brandCategory: async function (body: any) {
    return await axiosClient.post("brands/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
   getAllBrands: async function () {
      return await axiosClient.get("brands/get-all");
      
    },
      getoneBrands: async function (id:string) {
        return await axiosClient.get(`brands/get-one/${id}`);
        
      },
      updateBrands: async function (body: any,id:string) {
        return await axiosClient.put(`brands/update/${id}`, body, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
    },
    deleteBrands: async function (id:string) {
      return await axiosClient.delete(`brands/delete/${id}`);
      
    },
}