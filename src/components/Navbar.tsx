import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../components/SlidebarData';
import { SidebarData1 } from '../components/SlidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { LocationDescriptorObject, Location, History } from 'history';


/* export interface SidebarData2 {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
} */

function Navbar(this: any) {
  const sesion = false;
  let SidebarData2: { cName: string | undefined; path: string | LocationDescriptorObject<unknown> | ((location: Location<unknown>) => History.LocationDescriptor<unknown>); icon: React.ReactNode; title: React.ReactNode; }[] = [];
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  if(sesion == false){
    SidebarData2 = SidebarData1;

  }else{
    this.SidebarData2 = SidebarData;
  }
   
  
  
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData2.map((item: { cName: string | undefined; path: string | LocationDescriptorObject<unknown> | ((location: Location<unknown>) => History.LocationDescriptor<unknown>); icon: React.ReactNode; title: React.ReactNode; }, index: string | number | null | undefined) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;
