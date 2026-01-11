import { Carousel } from 'react-responsive-carousel'
import TestimonialCard from './CardInfo/TestimonialCard'

export default function CarouselPage() {
    return (
        <Carousel
            autoPlay
            showArrows
            infiniteLoop
            showIndicators
            interval={4000}
            showThumbs={false}
            showStatus={false}>
            <TestimonialCard
                isCarousel
                name='Micheal Caldwell'
                description="This is the best Mediterranean food that I've ever had!"
            />
            <TestimonialCard
                isCarousel
                name='Alan Chen'
                description='My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here.'
            />
            <TestimonialCard
                isCarousel
                name='Casey Lau'
                description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
            />
            <TestimonialCard
                isCarousel
                name='John Rosenblum'
                description='Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to.'
            />
            <TestimonialCard
                isCarousel
                name='Jim Reynor'
                description='The food here really refreshed me after a late night shift
                at the local supply depot.'
            />
            <TestimonialCard
                isCarousel
                name='Brian Dean'
                description='I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here.'
            />
            <TestimonialCard
                isCarousel
                name='Tyler Tohmine'
                description='The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago.'
            />
            <TestimonialCard
                isCarousel
                name='Jack Hu'
                description='This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!'
            />
        </Carousel>
    )
}
