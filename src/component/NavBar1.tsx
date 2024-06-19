import React, { useState } from 'react'
import { TNavbarItem } from '../typeComponent/index2'
import iconArrowDown from '../images/iconArrowDown.svg'
import iconArrowUp from '../images/iconArrowUp.svg'
import './navBar1.css'

interface Props {
    menu: TNavbarItem;
}
 
export const  NavBar1: React.FC<Props> = ({menu}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropdownOpen1, setDropdownOpen1] = useState(false)
    const handleMouseEnter = () => {
        setDropdownOpen(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownOpen(false);
      };

      const handleMouseEnter1 = () => {
        setDropdownOpen1(true);
      };
    
      const handleMouseLeave1 = () => {
        setDropdownOpen1(false);
      };
      

      const hasChildren = menu.children1 && menu.children1.length > 0;
    
    return (
        <nav>
            <img className='logo-nav' src={menu?.icon1} alt="" />
            <button>{}</button>
            <div className='links-Container'>
            <ul className='linksItems'>
                <li>
                    <a href={menu?.href1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{menu?.label1} {dropdownOpen && hasChildren ? (<img src={iconArrowUp} alt="" />) : (<img src={iconArrowDown} alt="" />)}</a>
                        {dropdownOpen && hasChildren &&
                            <ul className='dropdown-menu'>
                                {menu.children1?.map((child1, id1) =>(
                                   <a href={child1?.href1}> <li key={id1}><img src={child1?.icon} alt="" /><span>{child1?.label1}</span></li></a>
                                ))}
                            </ul>
                        }
                    </li>
                    <li>
                    <a href={menu?.href2} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>{menu?.label2} {dropdownOpen && hasChildren ? (<img src={iconArrowUp} alt="" />) : (<img src={iconArrowDown} alt="" />)}</a>
                    { dropdownOpen1 && hasChildren &&
                        <ul className='dropdown-menu'>
                            {menu.children2?.map((child2, id2) =>(
                                <a href={child2?.href2}><li key={id2}><span>{child2?.label2}</span></li></a>
                            ))}
                        </ul>
                        }
                    </li>
                    <a href={menu?.href3}><li>{menu?.label3}</li></a>
                    <a href={menu?.href4}><li>{menu?.label4}</li></a>
                </ul>
            </div>
            <div className='sign-btn'>
              <button type='button'><a href={menu?.href5}>{menu?.label5}</a></button>
              <button type='button'><a href={menu?.href6}>{menu?.label6}</a></button>
            </div>

        </nav>
    )
}

export default NavBar1
