import { getCharacterById } from '@/api/characters/main'
import React from 'react'

const Character = async ({ id }: { id: number }) => {
    const character = await getCharacterById(id)
    console.log(character)

    return (
        <div>Character</div>
    )
}

export default Character