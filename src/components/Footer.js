import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className='img-footer'>
                    <img
                        width='100%'
                        alt='Little Lemon logo'
                        src={require('../assets/footer-img.png')}
                    />
                </div>

                <menu className='flex'>
                    <li className='contact'>
                        <h2>Navigation</h2>
                        <ul className='footer-links'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <a
                                href={require('../assets/menu.webp')}
                                target='_blank'
                                rel='noreferrer'>
                                Menu
                            </a>
                            <NavLink to='/reservations'>Reservations</NavLink>
                            <NavLink to='/order'>Order</NavLink>
                        </ul>
                    </li>

                    <li>
                        <h2>Contact</h2>
                        <ul className='footer-links'>
                            <li>2395 Maldove Way,</li>
                            <li>Chicago Illinois</li>
                            <br></br>
                            <li>(629)-243-6827</li>
                            <a
                                href='mailto: info@littlelemon.com'
                                target='_blank'
                                rel='noreferrer'>
                                info@littlelemon.com
                            </a>
                        </ul>
                    </li>

                    <li>
                        <h2>Connect</h2>
                        <ul className='footer-links'>
                            <a
                                href='https://www.facebook.com/thelittlelemonshop/'
                                target='_blank'
                                rel='noreferrer'>
                                Facebook
                            </a>
                            <a
                                href='https://www.instagram.com/littlelemonmoon/'
                                target='_blank'
                                rel='noreferrer'>
                                Instagram
                            </a>
                        </ul>
                    </li>
                </menu>
            </div>
        </footer>
    )
}
