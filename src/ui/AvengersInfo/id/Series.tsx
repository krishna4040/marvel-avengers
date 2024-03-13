import { getSeriesById } from '@/api/series/main'
import React from 'react'

const Series = async ({ id }: { id: number }) => {
    const series = await getSeriesById(id)
    console.log(series)

    return (
        <div>Series</div>
    )
}

export default Series