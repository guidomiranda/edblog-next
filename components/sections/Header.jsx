import React from 'react'
import MainMenu from '../navigation/MainMenu'
import Link from 'next/link'

const Header = () => (
  
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <div className="s-cols-4 lg-cols-1 s-cross-center">
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="EDlogo" className="main-logo" />
            </a>
          </Link> 
        </div>
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <MainMenu /> 
          <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header> 
   
)

export default Header