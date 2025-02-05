import { BrandApi } from '@/api/BrandApi';
import Brandeditform from '@/components/Brands/Brandeditform';

import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'

async function getoneBrands(id: string) {
  const response: any = await BrandApi.getoneBrands(id);
  return response.data;
}

const EditBrands = async ({params}:{params: {id: string}}) => {
  
  const response = await getoneBrands(params.id)

  const brand= response.data;
  return (
    <div>
        
      <DefaultLayout> <Brandeditform  brands={brand} brandId={params.id}/> </DefaultLayout>
      
    </div>
  )
}

export default EditBrands
