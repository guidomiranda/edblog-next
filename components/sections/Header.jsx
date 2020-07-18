import React from 'react'
import MainMenu from '../navigation/MainMenu'
import Link from 'next/link'

const Header = () => (
    <header>
        <Link href="/">
          <a>
            <img src="https://ed.team/static/images/logo.svg" alt="EDlogo" className="main-logo" />
          </a>
        </Link>
        
         <MainMenu /> 

    </header>
)

export default Header