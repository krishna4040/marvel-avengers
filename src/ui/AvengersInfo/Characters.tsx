import React from 'react'
import { ParallaxScroll } from '../aceternity/parallax-scroll';
import { getCharacters } from '@/api/characters/main';

const Characters = async () => {

    const characters = await getCharacters(20)
    const thumbnails = characters.map(character => character.thumbnail.path + "." + character.thumbnail.extension)

    return (
        <ParallaxScroll images={thumbnails} className='overflow-y-scroll no-scrollbar' />
    );
}

export default Characters