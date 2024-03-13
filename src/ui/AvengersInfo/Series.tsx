import { getSeries } from '@/api/series/main'
import React from 'react'
import { ParallaxScroll } from '../aceternity/parallax-scroll';

const Series = async () => {

    const series = await getSeries(100)
    const modifiedSeries = series.map(s => {
        return {
            images: s.thumbnail.path + "." + s.thumbnail.extension,
            id: s.id
        }
    })

    return (
        <ParallaxScroll route='/series' info={modifiedSeries} className='overflow-y-scroll no-scrollbar' />
    );
}

export default Series