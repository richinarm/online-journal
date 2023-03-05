import React from 'react'
import Card from './Card'
import data from './data'

function Bodybit() {
    const mydata = data.map(item=> 
        <Card
        key = {item.id}
        country = {item.country}
        date = {item.date}
        city = {item.city}
        description = {item.description}
        image = {item.image}
        />)
  return (
    <div className='body-container'>
        {mydata}
    </div>
    
  )
}

export default Bodybit