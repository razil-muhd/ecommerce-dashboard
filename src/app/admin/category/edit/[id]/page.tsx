
import { CategoryApi } from '@/api/CategoryApi';
import Categoryeditform from '@/components/Category/Categoryeditform'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import { cookies } from 'next/headers';
import React from 'react'

async function getoneCategory(id: string,) {
   const serverCookies = cookies();
    const accessToken=serverCookies.get("accessToken")?.value;
     const response: any = await CategoryApi.getoneCategory(id,accessToken)
     return response.data;
}

const EditCategory = async ({params}:{params: {id: string}}) => {
    const response = await getoneCategory(params.id)
    const categoryid = response.data;
     
  return (
    <div>
        
      <DefaultLayout><Categoryeditform  category={categoryid} categoryId={params.id}/></DefaultLayout>
      
    </div>
  )
}

export default EditCategory
