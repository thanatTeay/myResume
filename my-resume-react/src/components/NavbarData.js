import React, { Component } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson, BsCode} from 'react-icons/bs'
import {FaGraduationCap, FaUniversity} from 'react-icons/fa'
import {RiFilePaper2Line} from 'react-icons/ri'
import PropTypes from 'prop-types'

export const NavbarData = [
    {
        title: "Home",
        icon: <AiOutlineHome/>,
        link: "/"
    },
    {
        title: "About me",
        icon: <BsPerson/>,
        link: "/about"
    },
    {
        title: "Education",
        icon: <FaGraduationCap/>,
        link: "/education"
    },
    {
        title: "Skills",
        icon: <BsCode/>,
        link: "/skills"
    },
    {
        title: "Publications",
        icon: <RiFilePaper2Line/>,
        link: "/publications"
    },
    {
        title: "Thesis",
        icon: <FaUniversity/>,
        link: "/thesis"
    }
]
