import React from "react"
import Link from "next/link"

const MainMenu = () => (
        <nav className="main-menu" id="main-menu">
            <ul>
                <li><Link href="/"><a>Inicio</a></Link></li>
                <li><Link href="/about"><a>Acerca de Nosotros</a></Link></li>
                <li><Link href="/contact"><a>Contacto</a></Link></li>
            </ul>
        </nav>
)

export default MainMenu