import React from 'react'
import { Categories } from './Categories'
import { StatsSection } from './StatsSection'
import { LastProductCard } from './LastProductCard'

export const DashboardContent = () => {
  return (
    <>
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
