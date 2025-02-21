
import { BannerApi } from "@/api/BannerApi";
import { BrandApi } from "@/api/BrandApi";
import { CategoryApi } from "@/api/CategoryApi";
import { ProductApi } from "@/api/ProductsApi";
import Bannereditform from "@/components/banner/Bannereditform";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Productseditform from "@/components/products/Productseditform";
import { cookies } from "next/headers";
import React from "react";

async function getoneproducts (id: string) {
   const serverCookies = cookies();
       const accessToken=serverCookies.get("accessToken")?.value;
  const response: any = await ProductApi.getoneProducts(id,accessToken);
  const response2: any = await CategoryApi.getAllCategory(accessToken);
  const response3: any = await BrandApi.getAllBrands(accessToken);
  return{response:response.data,response2:response2.data,response3:response3.data}
  
}

const EditBanners = async ({params}:{params: {id: string}}) => {
  
  const response = await getoneproducts(params.id);
  const products = response.response.data;
  const categories= response.response2.data;
  const brands = response.response3.data;
 
  return (
    <div>
      <DefaultLayout>
        <Productseditform products={products}  brands={brands} categories={categories}  productid={params.id}/>
      </DefaultLayout>
    </div>
  );
};

export default EditBanners;

