import React from 'react'
import bg from '../img/Subtract.png'

export function Location({locationDetails}) {

    return (
        <div class="single-episod" style={{background: `url(${bg})`,backgroundRepeat:"no-repeat"}}>
            <p>#{locationDetails.id}</p>
            <h1>{locationDetails.name}</h1>
        </div>
    )
}
