import React from 'react'
import { ParallaxScroll } from '../aceternity/parallax-scroll';
import { getEvents } from '@/api/events/main';

const Events = async () => {

    const events = await getEvents(100)
    const modifiedEvents = events.map(event => {
        return {
            images: event.thumbnail.path + "." + event.thumbnail.extension,
            id: event.id
        }
    })

    return (
        <ParallaxScroll info={modifiedEvents} route='/events' className='overflow-y-scroll no-scrollbar' />
    );
}

export default Events