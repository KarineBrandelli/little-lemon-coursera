import { NavLink } from 'react-router-dom'

export default function SpecialCard(props) {
    return (
        <article className='menu-card'>
            <img src={props.image} alt='Special menu' />

            {props.isCarousel ? (
                <section className='menu-card-carousel'>
                    <div>
                        <div className='menu-card-carousel-content'>
                            <h1>{props.name}</h1>
                            <h3>{props.price}</h3>
                        </div>
                        <p>{props.description}</p>
                    </div>
                    <NavLink className='special-button' to='/order'>
                        Order for Delivery
                    </NavLink>
                </section>
            ) : (
                <section className='menu-card-content'>
                    <h1>{props.name}</h1>
                    <h3>{props.price}</h3>
                    <p>{props.description}</p>
                    <NavLink className='special-button' to='/order'>
                        Order for Delivery
                    </NavLink>
                </section>
            )}
        </article>
    )
}
