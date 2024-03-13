import React from 'react'
import { ParallaxScroll } from '../aceternity/parallax-scroll';
import { getCharacters } from '@/api/characters/main';

const Characters = async () => {

    const characters = await getCharacters(20)
    const modifiedCharacters = characters.map(character => {
        return {
            images: character.thumbnail.path + "." + character.thumbnail.extension,
            id: character.id
        }
    })

    return (
        <ParallaxScroll info={modifiedCharacters} route='/characters' className='overflow-y-scroll no-scrollbar' />
    );
}

export default Characters