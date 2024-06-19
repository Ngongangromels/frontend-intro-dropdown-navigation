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
    <li className="nav-item">
      <a
        href={menu.href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {menu.label}{" "}
        {dropdownOpen && hasChildren ? (
          <img src={iconArrowUp} alt="" />
        ) : (
          <img src={iconArrowDown} alt="" />
        )}
      </a>
      {dropdownOpen &&
        hasChildren &&
        menu.children?.map((child, idx) => (
          <ul key={idx}>
            <li>
              <img src={child.icon} alt="" /> <span>{child.label}</span>
            </li>
          </ul>
        ))}
    </li>
  );
};
