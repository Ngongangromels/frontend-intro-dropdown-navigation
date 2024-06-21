import { FC, useState } from "react";
import { TNavbarItem } from "../NavBar";
import './NavBarMenuIdemMobile.css'
import iconArrowUp from "../../images/iconArrowUp.svg";
import iconArrowDown from "../../images/iconArrowDown.svg";

interface Props {
  menu: TNavbarItem;
}

export const NavBarMenuItemMobile: FC<Props> = ({ menu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleShowMenu = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const hasChildren = menu.children && menu.children.length > 0;
  

  return (
    <ul className="nav-item-mobile">

      <li className="element-line"><a href={menu.href} onClick={handleShowMenu}>{menu.label}</a>{hasChildren && (dropdownOpen ? (<img className="icon-nav-mobile" src={iconArrowUp} alt="" />) : (<img className="icon-nav-mobile" src={iconArrowDown} alt="" />))}</li>
      {dropdownOpen &&
        hasChildren &&   
        <li className="dropdown-menu-mobile">
          {
             menu.children?.map((child, idx) => (
              <li key={idx}> <img src={child.icon} alt="" /><a href={child.href}> <span>{child.label}</span></a></li>
        ))}
        </li>
       }
    </ul>
    
  );
};
