import { getEventById } from '@/api/events/main'
import React from 'react'

const Event = async ({ id }: { id: number }) => {
    const event = await getEventById(id)
    console.log(event)

    return (
        <div>Event</div>
    )
}

export default Event