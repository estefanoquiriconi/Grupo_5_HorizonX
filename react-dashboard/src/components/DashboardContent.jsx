import React from 'react'
import { Categories } from './Categories'
import { StatsSection } from './StatsSection'
import { LastProductCard } from './LastProductCard'

export const DashboardContent = () => {
  return (
    <>
      {/* <div className='d-sm-flex align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>DASHBOARD</h1>
      </div>   */}
      <StatsSection />
      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <LastProductCard />
        </div>
        <div className='col-lg-6 mb-4'>
          <Categories />
        </div>
      </div>
    </>
  )
}
