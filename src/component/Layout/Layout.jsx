import {React,useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Provider from 'react-use-dark-mode';

export default function Layout() {
  return (
    <>
    <Provider>
      <Navbar/>
      </Provider>
      <Outlet/>
      <Footer/>
    </>
  )
}
