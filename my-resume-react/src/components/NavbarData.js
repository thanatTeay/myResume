import React, { Component } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {FaGraduationCap, FaUniversity, FaFacebookSquare, FaGithub} from 'react-icons/fa'
import {RiFilePaper2Line, RiCodeFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'

import PropTypes from 'prop-types'

export const NavbarData = [
    {
        title: "Home",
        icon: <AiFillHome/>,
        link: "/"
    },
    {
        title: "About me",
        icon: <BsPersonFill/>,
        link: "/about"
    },
    {
        title: "Education",
        icon: <FaGraduationCap/>,
        link: "/education"
    },
    {
        title: "Skills",
        icon: <RiCodeFill/>,
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

export const footerData = [
    {
        title: "Facebook",
        icon: <FaFacebookSquare/>,
        link: "/thesis"
    },
    {
        title: "GitHub",
        icon: <FaGithub/>,
        link: "/thesis"
    },
    {
        title: "Gmail",
        icon: <MdEmail/>,
        link: "/thesis"
    },
]
