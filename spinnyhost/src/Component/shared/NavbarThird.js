import React, { useEffect, useState } from 'react';
import './NavbarThird.css';
import { NavLink } from 'react-router-dom';
import { BsCartPlusFill } from "react-icons/bs";



const NavbarThird = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isHostingDropdownOpen, setIsHostingDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHomeDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const closeHomeDropdown = () => {
    setIsHomeDropdownOpen(false);
  };

  const toggleHostingDropdown = () => {
    setIsHostingDropdownOpen(!isHostingDropdownOpen);
  };

  const closeHostingDropdown = () => {
    setIsHostingDropdownOpen(false);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const closePagesDropdown = () => {
    setIsPagesDropdownOpen(false);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
  };

  const closeFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(false);
  };

  const toggleSupportDropdown = () => {
    setIsSupportDropdownOpen(!isSupportDropdownOpen);
  };

  const closeSupportDropdown = () => {
    setIsSupportDropdownOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <div className={`navbar-third ${isScrolled ? 'scrolled' : ''}`}>

      <div className="navbar-logo">
        <NavLink className="nav-logo" to="/">
          {/* <h2>Logo</h2> */}
          <img src="img/logo.png"></img>
        </NavLink>
      </div>
      <div className={isOpen ? 'navbar-menu active' : 'navbar-menu'}>
        <div
          className="navbar-item"
          onMouseEnter={toggleHomeDropdown}
          onMouseLeave={closeHomeDropdown}
        >
          <NavLink to="/">
            <a className='do-hover'>Home</a>
          </NavLink>
        </div>
        <div
          className="navbar-item"
          onMouseEnter={toggleHostingDropdown}
          onMouseLeave={closeHostingDropdown}
        >
          <NavLink to="/About">
            <a className='do-hover'>About</a>
          </NavLink>

        </div>
        <div
          className="navbar-item"
          onMouseEnter={togglePagesDropdown}
          onMouseLeave={closePagesDropdown}
        >
          <a className='do-hover'>Services</a>
          {isPagesDropdownOpen && <div className="line-animation"></div>}

          {isPagesDropdownOpen && (
            <div className="home-dropdown">
              <div className='first-home-drop'>
                <img src="img/cloudfiber.svg"></img>
                <NavLink to="/Sharedland">
                  <a>Shared Hosting </a>
                </NavLink>
              </div>
              <div className='second-home-drop'>
                <img src="img/cloudfiber.svg"></img>
                <NavLink to="/SharedNav">
                  <a >Premium Shared Hosting </a>
                </NavLink>
              </div>
              <div className='third-home-drop'>
                <img src="img/dedicated.svg"></img>
                <NavLink to="/Dedicated">
                  <a href="#dedicated-servers">Dedicated Servers</a>
                </NavLink>
              </div>
            </div>
          )}
        </div>

        <div
          className="navbar-item"
          onMouseEnter={toggleSupportDropdown}
          onMouseLeave={closeSupportDropdown}
        >
          
            <a className='do-hover'>Contact Us</a>
        
          {isSupportDropdownOpen && <div className="line-animation"></div>}
          {isSupportDropdownOpen && (
            <div className="nav-drop-main">
              <div className="sec-nav-head">
                <div className="navbar-dropdown">
                  <div className='first-home-drop'>
                    <img src="img/cloudfiber.svg"></img>
                    <NavLink to="/Legal">
                      <a>Legal </a>
                    </NavLink>
                  </div>
                  <div className='second-home-drop'>
                    <img src="img/cloudfiber.svg"></img>
                    <NavLink to="">
                      <a >Blog </a>
                    </NavLink>
                  </div>
                  <div className='third-home-drop'>
                    <img src="img/dedicated.svg"></img>
                    <NavLink to="/Faq">
                      <a href="#dedicated-servers">FAQ</a>
                    </NavLink>
                  </div>

                </div>
                <div className='nav-contact' >
                  Call us: +91 7045865031 A-88/T07 SECTOR 04 NOIDA (NCR)
                  <NavLink to="/Contact"> 
                <p className='contact-para'>Contact Us</p>
                </NavLink>
                </div>
                
                </div>
              </div>
          )}
            </div>
        {/* New button for Client Area */}
        <NavLink className=" navlink-nav" to ='/SignupLogin'>
          <div className="navbar-item client-area-btn">
            <a className=" client-hov" href="#client-area">
              Client Area
            </a>
          </div>
          </NavLink>
          <div
            className="navbar-item"
            onMouseEnter={toggleHomeDropdown}
            onMouseLeave={closeHomeDropdown}
          >
            <NavLink to="/Cart">
              <a className='cart-item'> <img src="img/cart.png"></img> </a>
            </NavLink>

          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={isOpen ? 'bar bar1 open' : 'bar bar1'}></div>
          <div className={isOpen ? 'bar bar2 open' : 'bar bar2'}></div>
          <div className={isOpen ? 'bar bar3 open' : 'bar bar3'}></div>
        </div>
      </div>
      );
};

      export default NavbarThird;
