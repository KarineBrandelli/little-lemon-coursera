import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from './Navigation'
import Hamburger from '../assets/hamburger.png'
import Close from '../assets/close.png'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const handleToggle = () => {
        setOpenMenu(prev => !prev)
    }

    return (
        <nav className='flex flex-column justify-center'>
            <div className='flex align-center space-between'>
                <NavLink to='/' className='nav-logo-container'>
                    <img
                        width='100%'
                        alt='Little Lemon logo'
                        src={require('../assets/logo.png')}
                    />
                </NavLink>

                <div className='mobile'>
                    <button className='burguer-icon' onClick={handleToggle}>
                        <img
                            width='100%'
                            alt='Menu icon'
                            src={openMenu ? Close : Hamburger}
                        />
                    </button>
                </div>

                <menu className='flex desktop'>
                    <Navigation />
                </menu>
            </div>

            {openMenu && (
                <menu className='mobile'>
                    <Navigation />
                </menu>
            )}
        </nav>
    )
}
