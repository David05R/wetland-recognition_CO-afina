import NavRail from '@/components/dashboard/navrail'
import '@/app/globalicons.css'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-screen h-screen flex flex-row'>
        <div id='navRailContainer' className='w-24 h-full'>
            <NavRail />
        </div>
        <div className='w-full flex p-3 bg-background'>
            {children}
        </div>
    </div>
  )
}

export default Layout