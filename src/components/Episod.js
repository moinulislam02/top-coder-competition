import React from 'react'
import bg from '../img/Subtract.png'

export function Episod({episod}) {

    return (
        <div class="single-episod" style={{background: `url(${bg})`,backgroundRepeat:"no-repeat"}}>
            <p>{episod.episode}</p>
            <h1>{episod.name}</h1>
        </div>
    )
}
