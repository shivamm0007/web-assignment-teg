import React from 'react'
import './sidenav.css'
import logo1 from '../assets/001-speedometer.svg'
import logo2 from '../assets/001-delivery-truck.svg'
import logo3 from '../assets/001-location.svg'
import logo4 from '../assets/002-consultation.svg'
import logo5 from '../assets/001-analytics.svg'
import logo from '../assets/teg_logo.png'
import logo6 from '../assets/001-gear.svg'

function SideNav() {
    return (
        <div>
            
            <div className="sidebar">
            <img src = {logo} className = "main-logo" alt = ""/>
            <img src = {logo1} className = "logoimage" alt = ""/>
            <img src = {logo2} className = "logoimage" alt = ""/>
            <img src = {logo3} className = "logoimage" alt = ""/>
            <img src = {logo4} className = "logoimage" alt = ""/>
            <img src = {logo5} className = "logoimage" alt = ""/>
            <img src = {logo6} className = "setting-logo" alt = ""/>
            </div>
        </div>
    )
}
export default SideNav