import CarouselFadeExample from "./CarouselComponent"
import "../CSS/HomeStyle.css"
import FooterComponent from "./FooterComponent"
import SearchingPackage from "./SearchingPackageComponent"
import NavbarComponent from "./NavbarComponent"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"


export default function HomeComponent(props)
{

    return(
        <div>
            <NavbarComponent ></NavbarComponent>     
        <div className="c-renderelement">
        
            <CarouselFadeExample/>
             <SearchingPackage/>
             <FooterComponent/> 
        </div>
        <Outlet></Outlet>

        </div>
    )
}