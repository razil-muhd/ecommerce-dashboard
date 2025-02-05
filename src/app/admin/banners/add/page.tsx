import { CategoryApi } from '@/api/CategoryApi';
import Banneraddform from '@/components/banner/Banneraddform'

import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'
async function getAllCategory() {
  const response: any = await CategoryApi.getAllCategory();
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
