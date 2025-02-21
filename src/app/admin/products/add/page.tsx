
import { BrandApi } from '@/api/BrandApi';
import { CategoryApi } from '@/api/CategoryApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import Productsaddform from '@/components/products/Productsaddform'
import { cookies } from 'next/headers';
import React from 'react'
async function getAllCategory() {
  const serverCookies = cookies();
          const accessToken=serverCookies.get("accessToken")?.value;
  const response: any = await CategoryApi.getAllCategory(accessToken);
  const response1: any = await BrandApi.getAllBrands(accessToken);
  return{response:response.data,response1:response1.data}}



  const page = async ()=> {
    const response = await getAllCategory()
    const brands= response.response1.data;
    const categories = response.response.data;
   
 

  return (
    <div>
        
      <DefaultLayout>  <Productsaddform categories={categories} brands={brands}/></DefaultLayout>
      
    </div>
  )
}
  

export default page
