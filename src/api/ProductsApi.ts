import axiosClient from "./config/axiosCongig";

export const ProductApi = {
  createProduct: async function (body: any) {
    const accessToken = window.localStorage.getItem("accesstoken");
    return await axiosClient.post("products/create", body, {
      headers: {
        "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${accessToken}`
      },
    });
  },
   getAllProducts: async function (accessToken?:string) {
      return await axiosClient.get("products/get-all" ,{
        headers:{
          "Authorization": `Bearer ${accessToken}`
        }
      });
      
    },
     getoneProducts: async function (id:string,accessToken?:string) {
            return await axiosClient.get(`products/get-one/${id}`,{
              headers:{
                "Authorization": `Bearer ${accessToken}`
              }
            });
            
          },
                updateproducts: async function (body: any,id:string) {
                  const accessToken = window.localStorage.getItem("accesstoken");
                  return await axiosClient.put(`products/update/${id}`, body, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                       "Authorization": `Bearer ${accessToken}`
                    }
                  })
              },
              featuredProduct: async function (id:string) {
                const accessToken = window.localStorage.getItem("accesstoken");
                
                return await axiosClient.put(`products/featured/${id}`,{},{
                  headers:{
                     "Authorization": `Bearer ${accessToken}`
              
                  }
                })
            },
                deleteProducts: async function (id:string) {
                  const accessToken = window.localStorage.getItem("accesstoken");
                    return await axiosClient.delete(`products/delete/${id}`,{
                      headers:{
                         "Authorization": `Bearer ${accessToken}`
                  
                      }
                    });
                    
                  },

 
}