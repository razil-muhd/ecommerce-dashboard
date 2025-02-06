
import { BannerApi } from '@/api/BannerApi';
import Bannertable from '@/components/banner/Bannertable'
import DefaultLayout from '@/components/Layouts/DefaultLaout'
import React from 'react'
async function getAllBanners() {
  const response: any = await BannerApi.getAllBanners();
  return response.data;
}
const BannerTables = async () => {
  const banners = await getAllBanners();
  const bannerData = banners.data;
  console.log("hiii:",bannerData)

  return (
    
    <div>
      <DefaultLayout>
  
          <Bannertable banners={bannerData}/>
      </DefaultLayout>
      
    </div>
  )
}

export default BannerTables