import React from 'react'
import { ParallaxScroll } from '../aceternity/parallax-scroll';
import { getEvents } from '@/api/events/main';

const Events = async () => {

    const events = await getEvents(100)
    const thumbnails = events.map(e => e.thumbnail.path + "." + e.thumbnail.extension)

    return (
        <ParallaxScroll images={thumbnails} className='overflow-y-scroll no-scrollbar' />
    );
}

export default Events