import React from 'react'
import PrimaryNav from '../../components/PrimaryNav'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
    <PrimaryNav/>
   
    
    <Outlet/>
    </>
   
  )
}

export default index;