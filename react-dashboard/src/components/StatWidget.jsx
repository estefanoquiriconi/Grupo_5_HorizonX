import React from 'react'
import PropTypes from 'prop-types'

export const StatWidget = ({ title, quantity, borderColor, icon }) => {
  return (
    <div className={`card border-left-${borderColor} h-100 py-2`}>
      <div className='card-body'>
        <div className='row no-gutters align-items-center'>
          <div className='col mr-2'>
            <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
              {title}
            </div>
            <div className='h5 mb-0 font-weight-bold text-gray-800'>
              {quantity}
            </div>
          </div>
          <div className='col-auto'>
            <i className={`fas ${icon} fa-2x text-gray-300`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

StatWidget.propTypes = {
  title: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
}
