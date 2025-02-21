
import { BrandApi } from '@/api/BrandApi';
import { CategoryApi } from '@/api/CategoryApi';
import { ProductApi } from '@/api/ProductsApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import Productstable from '@/components/products/Productstable'
import { cookies } from 'next/headers';
import React from 'react'
async function getAllProducts() {
    const serverCookies = cookies();
           const accessToken=serverCookies.get("accessToken")?.value;
           const response: any = await ProductApi.getAllProducts(accessToken);
         return response.data;
 

}

const ProductTables = async () => {
  const products = await getAllProducts();
  const productdata = products.data;


  return (
    <div>
        <DefaultLayout>
      <Productstable productdata={productdata}/>
      </DefaultLayout>
      
    </div>
  )
}

export default ProductTables
