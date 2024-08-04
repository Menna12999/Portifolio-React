import React from 'react'

export default function Footer() {
  return (
    <>
  <div className="mt-11 pt-[3rem] footer">
      <div className="container  m-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-5 px-[1rem] max-sm:px-[1rem] ">
        <div className='text-center'>
        <h2 className="font-semibold mb-4">LOCATION</h2>
        <p className='mb-0'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>
        <div className='text-center'>
          <h2 className="font-semibold mb-4">AROUND THE WEB</h2>
          <ul className="icon flex gap-3  justify-center">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li> 
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
          
        </ul>
        </div>
        <div className='text-center'>
        <h2 className="font-semibold mb-4">ABOUT FREELANCER</h2>
        <p className='mb-0'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div> 
        <div className="text-center pt-10 pb-3">
        Copyright © Your Website 2024
        </div>
        </div>
        
        </>
        
  )
}
