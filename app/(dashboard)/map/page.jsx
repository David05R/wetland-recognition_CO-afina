"use client"
import MapVis from '@/components/dashboard/mapvis'
import Selectors from '@/components/dashboard/selectors'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full relative'>
        <Selectors />
        <MapVis />
    </div>
  )
}

export default Page