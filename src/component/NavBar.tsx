import React, { useState } from "react";
import iconTodo from "../images/iconTodo.svg";
import iconCalender from "../images/iconCalendar.svg";
import iconReminders from "../images/iconReminders.svg";
import iconPlanning from "../images/iconPlanning.svg";
import logo from "../images/logo.svg";
import { NavBarMenuItem } from "./NavBarMenuItem";

export interface TNavbarItem {
  href: string;
  label: string;
  icon?: string;
  children?: TNavbarItem[];
}

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
  {
    href: '#Login',
    label: 'Login',
  },
  {
    href: '#Register',
    label: 'Register',
  }
];

function NavBarre() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="nav-items">
        {NAV_BAR_ITEMS.map((item, idx) => (
          <NavBarMenuItem key={idx} menu={item} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBarre;
