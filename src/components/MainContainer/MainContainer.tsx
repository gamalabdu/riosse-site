import React from 'react'
import './styles.css'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

const MainContainer = () => {
  return (
    <div className='main-container'>

        <Nav />
        <Outlet/>

    </div>
  )
}

export default MainContainer