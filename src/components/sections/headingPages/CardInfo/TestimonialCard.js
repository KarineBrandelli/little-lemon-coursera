import Star from '../../../../assets/star.png'

export default function TestimonialCard(props) {
    return (
        <article className={props.isCarousel ? 'testimonial-card-carousel' : 'testimonial-card'}>
            <img src={Star} alt='Delivery icon'></img>

            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </article>
    )
}
