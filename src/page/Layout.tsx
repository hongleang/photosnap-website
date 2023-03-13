import React from 'react'
import Navs from "../components/Navs/Navs"
import Footer from "../components/Footer/Footer"

import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="max-w-desktop mx-auto">
            <Navs />
            <div className="mt-20"></div>
            <Outlet />
            <Footer />
        </div>
    )
}
