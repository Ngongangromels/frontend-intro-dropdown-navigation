import { FC, useState } from "react";
import { TNavbarItem } from "./NavBar";
import iconArrowUp from "../images/iconArrowUp.svg";
import iconArrowDown from "../images/iconArrowDown.svg";

interface Props {
  menu: TNavbarItem;
}

export const NavBarMenuItem: FC<Props> = ({ menu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const hasChildren = menu.children && menu.children.length > 0;
  

  return (
    <ul className="nav-item">

      <li className="element-line"><a href={menu.href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{menu.label}</a>{hasChildren && (dropdownOpen ? (<img className="icon-nav" src={iconArrowUp} alt="" />) : (<img className="icon-nav" src={iconArrowDown} alt="" />))}</li>
      {dropdownOpen &&
        hasChildren &&   
        <li className="dropdown-menu">
          {
             menu.children?.map((child, idx) => (
              <li key={idx}> <img src={child.icon} alt="" /><a href={child.href}> <span>{child.label}</span></a></li>
        ))}
        </li>
       }
    </ul>
    
  );
};
