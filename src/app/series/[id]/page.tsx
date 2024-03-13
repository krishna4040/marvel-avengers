import React from 'react'
import Series from '@/ui/AvengersInfo/id/Series'

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <Series id={params.id} />
    </div>
  )
}

export default Page