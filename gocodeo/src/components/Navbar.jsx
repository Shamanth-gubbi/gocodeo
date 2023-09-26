import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {

      setSidebar(!sidebar);
    
  };
  

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          
          <ul className="nav-menu-items" onClick={showSidebar}>
           
            <li className="navbar-toggle">
             
              <Link to="#" className="menu-bars">
                <span className="logo"> 
                 
                  <p>contour</p>
                  <AiIcons.AiOutlineClose />
                </span>
                
              </Link>
            </li>
            <div className="navlist">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                   
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
             
             
            </div>
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
