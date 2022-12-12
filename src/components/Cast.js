import React from 'react'
import { Link } from 'react-router-dom';
import imageBox from '../img/Box.png';

export function Cast({castInfo}) {
    return (
        <Link to={`/cast/${castInfo.id}`} class="single-cast" style={{background: `url(${imageBox})`,backgroundRepeat:"no-repeat"}}>
            <div className='cast-img-inner'>
                <img src={castInfo.image} alt=""/>
            </div>
            <h4>{castInfo.name}</h4>
        </Link>
    )
}
