import React, { useState } from 'react'
import CarCollection from "Components/vehicles/CarCollection"
import "Components/vehicles/styles/vehicles.css"
import Sidebar from 'Components/vehicles/Sidebar'
import ScrollToTop from 'Components/shared/ScrollToTop'



export default function Vehicles() {
    const [openFilter, setOpenFilter] = useState(false)

    return (
        <>
            <ScrollToTop />
            <div className="vehicles section-margin">
                <div className="vehicle-layout">
                    <Sidebar openFilter={openFilter} setOpenFilter={setOpenFilter} />
                    <CarCollection openFilter={openFilter} setOpenFilter={setOpenFilter} />
                </div>
            </div>
        </>
    )
}
