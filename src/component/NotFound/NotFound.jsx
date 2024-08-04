import React from 'react'
import error from '../../assets/error.avif'
export default function NotFound() {
  return (
    <div className='text-center my-4'>
      <h2>NotFound</h2>
      <img src={error} className='m-auto'/>
    </div>
  )
}

