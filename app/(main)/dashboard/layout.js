import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const DashboardLayout = () => {
    return (
      
        <div className='px-5'>
            <h1 className="text-5xl md:text-8xl lg:text-[95px] pb-6 bg-gradient-to-r from-blue-600 to-purple-600   font-bold tracking-tighter pr-2  text-transparent bg-clip-text">DashBoard</h1>
            
            {/**DashBoard Page */}

            <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color = "#9333ea"/>}>
               <DashboardPage/>
            </Suspense>
        </div>
    )
    
}

export default DashboardLayout