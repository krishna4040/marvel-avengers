import { getSeries } from '@/api/series/main'
import React from 'react'
import { ParallaxScroll } from '../aceternity/parallax-scroll';

const Series = async () => {

    const series = await getSeries(100)
    const thumbnails = series.map(s => s.thumbnail.path + "." + s.thumbnail.extension)

    return (
        <ParallaxScroll images={thumbnails} className='overflow-y-scroll no-scrollbar' />
    );
}

export default Series