import React from 'react'
import Tour from './Tour'
import './tours.css'

export default function Tours({ tours, removeTour }) {
    return (
        <div className='title'>
            <h2>Our Tours</h2>
            <div className="line"></div>
            <div>{tours.map((tour) => {
                return (
                    <Tour tour={tour.id}{...tour} removeTour={removeTour}/>
                )
            })}</div>
        </div>
    )
}
