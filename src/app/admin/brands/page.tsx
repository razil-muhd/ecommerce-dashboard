import { BrandApi } from '@/api/BrandApi';
import Brandstables from '@/components/Brands/Brandstable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'

import React from 'react'
async function getAllBrands() {
  const response: any = await BrandApi.getAllBrands();
  return response.data;
}

const BrandsTables = async () => {
  const brands = await getAllBrands();
  const brandData = brands.data;
  return (
    <div>
        <DefaultLayout>
            <Brandstables brands={brandData}/>
      
      </DefaultLayout>
      
    </div>
  )
}

export default BrandsTables
