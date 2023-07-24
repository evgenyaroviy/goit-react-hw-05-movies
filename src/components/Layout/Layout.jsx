import React from 'react'
import { Header } from "../Header/Header";
import { Outlet } from 'react-router-dom';
import './layout.module.css'


export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    
    )
}