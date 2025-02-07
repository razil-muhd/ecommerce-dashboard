
import { ProductApi } from '@/api/ProductsApi';
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import Productstable from '@/components/products/Productstable'
import React from 'react'
async function getAllProducts() {
  const response: any = await ProductApi.getAllProducts();
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
