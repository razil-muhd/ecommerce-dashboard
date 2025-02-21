import { BrandApi } from '@/api/BrandApi';
import Brandstables from '@/components/Brands/Brandstable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { cookies } from 'next/headers';

import React from 'react'
async function getAllBrands() {
      const serverCookies = cookies();
        const accessToken=serverCookies.get("accessToken")?.value;
        const response: any = await BrandApi.getAllBrands(accessToken);
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
