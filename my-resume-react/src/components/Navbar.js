import React, {useState}from 'react'
import "../App.css"
import { NavbarData } from './NavbarData'

function Navbar() {

    const [hovered,setHovered] = useState(false);
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {NavbarData.map((val, key) => {
                    return (
                        <li key={key} classname="row" onClick={() => {
                            window.location.pathname = val.link;
                        }}>
                            <div onMouseEnter = {() =>{setHovered(true)}}  onMouseLeave={()=>{setHovered(false)}}>{val.icon}</div>
                            <div>{hovered? val.title:""}</div>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Navbar
