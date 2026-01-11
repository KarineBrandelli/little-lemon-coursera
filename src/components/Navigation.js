import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <h5 className='menu-link'>Home</h5>
            </NavLink>
            <NavLink
                to='/about'
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <h5 className='menu-link'>About</h5>
            </NavLink>
            <a
                href={require('../assets/menu.webp')}
                target='_blank'
                rel='noreferrer'>
                <h5 className='menu-link'>Menu</h5>
            </a>
            <NavLink
                to='/reservations'
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <h5 className='menu-link'>Reservations</h5>
            </NavLink>
            <NavLink
                to='/order'
                className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <h5 className='menu-link'>Order</h5>
            </NavLink>
        </>
    )
}
