import React from 'react'

function Card(props) {
  return (
    <div className='card-container'>
        <div className='card-left'>
            <img src={props.image} className='card-thumbnail'/>
        </div>
        <div className='card-right'>

            <div className='location-horizontal'>
                <img src='./images/location-icon.png' className='location-icon'/>
                <p className='location-country'>{props.country}</p>
                <a href='#' className='location-googlemaps-link'>View On Google Maps</a>
            </div>

            <h2 className='location-city'>{props.city}</h2>
            <p className='location-date'>{props.date}</p>
            <p className='location-notes'>{props.description}</p>
        </div>
    </div>
  )
}

export default Card