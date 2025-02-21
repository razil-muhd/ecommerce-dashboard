import { BannerApi } from '@/api/BannerApi';
import { CategoryApi } from '@/api/CategoryApi';
import Banneraddform from '@/components/banner/Banneraddform'

import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { cookies } from 'next/headers';
import React from 'react'
async function getAllCategory() {
   const serverCookies = cookies();
      const accessToken=serverCookies.get("accessToken")?.value;
   const response: any = await CategoryApi.getAllCategory(accessToken);
   return response.data;
}


  const page = async () => {
    const response =  await getAllCategory();
    const categories = response.data
    console.log(":",categories)
    
  return (
    <div>
        
      <DefaultLayout>  <Banneraddform categories={categories}/></DefaultLayout>
      
    </div>
  )
}


export default page
