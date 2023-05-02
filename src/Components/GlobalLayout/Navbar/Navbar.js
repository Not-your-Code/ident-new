  import React,{useState} from 'react'
  import './Navbar.css'
  // import { Link, animateScroll as scroll } from "react-scroll";

  //       <img src={require('../Assests/logo/logo.png')} />
  // list w-50nav-link


  export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };
    return (
      <>

        <nav>
          <div className='NavCont'>
            <div className='Logo' >
              <img src={require('../../../Assests/logo/logo.png')} />
            </div>
            <div className='Content'>
              <ul className='NavItems'>
                <li className='NavLinks'>Home</li>
                <li className='NavLinks'>About</li>
                <li className='NavLinks'  >Team
                </li>
                <li className='NavLinks'>Partners</li>
                <li className='NavLinks'>Blogs</li>
                <li className='btnCont'><button id='btnNav'>Appointment</button></li>

              </ul>
            </div>
          </div>
        </nav>
        {/* <div className={`sidebar-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <ul className='sidebar-items'>
          <li className='sidebar-link'>Home</li>
          <li className='sidebar-link'>About</li>
          <li className='sidebar-link'>Team</li>
          <li className='sidebar-link'>Partners</li>
          <li className='sidebar-link'>Blogs</li>
          <li className='sidebar-button'>
            <button id='sidebar-btn-nav'>Appointment</button>
          </li>
        </ul>
      </div> */}
      </>
    );
  }
