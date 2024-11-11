import React from 'react'
import Navber from './../component/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './../component/Footer';

function Layout() {
    return (
        <div className='w-10/12 mx-auto'>
            <Navber></Navber>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default Layout
