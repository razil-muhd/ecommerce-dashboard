import { BannerApi } from "@/api/BannerApi";
import { CategoryApi } from "@/api/CategoryApi";
import Bannereditform from "@/components/banner/Bannereditform";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { cookies } from "next/headers";
import React from "react";

async function getAllCategory (id: string) {
   const serverCookies = cookies();
      const accessToken=serverCookies.get("accessToken")?.value;

  const response1: any = await BannerApi.getoneBanners(id,accessToken);
  const response2: any = await CategoryApi.getAllCategory(accessToken);
  return{response:response1.data,response1:response2.data}
  
}

const EditBanners = async ({params}:{params: {id: string}}) => {
  
  const response = await getAllCategory(params.id)
  const banners= response.response.data;
  const category = response.response1.data;
  return (
    <div>
      <DefaultLayout>
        <Bannereditform banners={banners} bannerid={params.id}  category={category}/>
      </DefaultLayout>
    </div>
  );
};

export default EditBanners;
