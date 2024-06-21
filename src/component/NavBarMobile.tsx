import React, { useState } from 'react'
import './NavBarMobile.css'
import logo from '../images/logo.svg'
import iconCloseMenu from '../images/iconCloseMenu.svg'
import iconMenu from '../images/iconMenu.svg'
import iconTodo from "../images/iconTodo.svg";
import iconCalender from "../images/iconCalendar.svg";
import iconReminders from "../images/iconReminders.svg";
import iconPlanning from "../images/iconPlanning.svg";
import { TNavbarItem } from './NavBar'
import { NavBarMenuItem } from './NavBarMenuItem'

const NAV_BAR_ITEMS: TNavbarItem[] = [
    {
      href: "#features",
      label: "Features",
      children: [
        {
          href: "#features",
          label: "Todo list",
          icon: iconTodo,
        },
        {
          href: "#features",
          label: "Calendar",
          icon: iconCalender,
        },
        {
          href: "#features",
          label: "Reminders",
          icon: iconReminders,
        },
        {
          href: "#features",
          label: "Planning",
          icon: iconPlanning,
        },
      ],
    },
    {
      href: "#company",
      label: "Company",
      children: [
        {
          href: "#company",
          label: "History",
        },
        {
          href: "#company",
          label: "Our team",
        },
        {
          href: "#company",
          label: "Blog",
        },
      ],
    },
    {
      href: "#career",
      label: "Career",
    },
    {
      href: "#about",
      label: "About",
    },
  ];

function NavBarMobile() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const handelToggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav className='nav-bar-mobile'>
            <ul>
                <li><img src={logo} alt="" /></li>
                <li className='btn-toggle-mobile' onClick={handelToggleMenu}>{showMenu ? (<img src={iconCloseMenu} alt="" />) : (<img src={iconMenu} alt="" />)}</li>
                {showMenu && 
                <div className='links-mobile-container'>
                   <ul className="links-items-mobile">
                        <li>
                            {NAV_BAR_ITEMS.map((item, idx) => (
                                    <NavBarMenuItem  key={idx} menu={item} />
                                ))}
                        </li> 
                    </ul>
                    <div className="sign-btn-mobile">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
                }
            </ul>
            
        </nav>
    )
}

export default NavBarMobile

