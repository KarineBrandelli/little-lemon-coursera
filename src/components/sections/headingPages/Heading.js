import { NavLink } from 'react-router-dom'

export default function Heading() {
    return (
        <header className='hero'>
            <article className='hero-container'>
                <section className='hero-content'>
                    <div className='hero-text'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>

                    <p>
                        We are a family owned Mediterranean restaurant, located
                        on Maldove Street in Chicago, Illionis. We focus on
                        traditional recipes served with a modern twist.
                    </p>

                    <NavLink className='action-button' to='/reservations'>
                        Reserve a table
                    </NavLink>
                </section>

                <section className='hero-image'>
                    <img
                        alt='Little Lemon restaurant cuisine'
                        src={require('../../../assets/hero.png')}
                    />
                </section>
            </article>
        </header>
    )
}
