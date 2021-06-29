import React, { useState } from 'react'
import "./navbarStyle.css"
import { NavbarData } from './NavbarData'
import { footerData } from './NavbarData'
import { DiYeoman } from 'react-icons/di'
import { AiOutlineMenu} from 'react-icons/ai'
import { useSpring, animated } from 'react-spring'
import { Tooltip } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles';


function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);


    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: 16,
        },
    }))(Tooltip);



    return (
        <div className={showSidebar ? 'sidebar active' : 'sidebar'} >
            <div className="container_logo">
                <div className="logo">

                    <div className="logo_name">Thanat's portfolio</div>
                </div>
                <i id="menu_btn" ><AiOutlineMenu onClick={() => setShowSidebar(!showSidebar)} /> </i>


                <ul >
                    {NavbarData.map((val, key) => {
                        return (
                            <LightTooltip title={val.title} placement="right" arrow>
                                <li>
                                    <span key={key} classname="row" onClick={() => {
                                        window.location.pathname = val.link;
                                    }}>
                                        <i>{val.icon}</i>
                                        <span>{val.title}</span>
                                    </span>


                                </li>
                            </LightTooltip>

                        )
                    })}
                
                    <ul className="footer_contact">
                            {footerData.map((val, key) => {
                                return (
                                    <LightTooltip title={val.title} placement="right" arrow>
                                        <li>
                                            <span key={key} classname="row" onClick={() => {
                                                window.location.pathname = val.link;
                                            }}>
                                                <i >{val.icon}</i>
                                                <span>{val.title}</span>
                                            </span>
                                        </li>

                                    </LightTooltip>

                                )
                            })}
                        </ul>



                </ul>





            </div>






        </div>
    )
}

export default Navbar
