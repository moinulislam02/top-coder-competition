import React from 'react'
import { getCharacter } from '../api';
import { Cast } from './Cast';
import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import bg from '../img/page-number.png'
import { Link } from 'react-router-dom';

export function CastList(props) {
    const [characteres, setcharacteres] = useState([])
    const [info, setinfo] = useState()
    const {id} = useParams()
    const [searchCategory, setsearchCategory] = useState("character")
    const [searchQuery, setsearchQuery] = useState("")

    const getCharacters =()=>{
        getCharacter(id).then((res)=>{
            setcharacteres(res.results)
            setinfo(res.info)
        })
    }

    useEffect(() => {
        getCharacters()
    }, [id])

    const displayCharacters = characteres.filter(cast => {
        if (searchCategory === null && searchQuery === "") {
            return cast
        }else if(searchCategory === 'character' && cast.name?.toLowerCase().includes(searchQuery?.toLowerCase())){
            return cast
        }else if(searchCategory === 'location' && cast.location?.name?.toLowerCase().includes(searchQuery?.toLowerCase())){
            return cast
        }
    }).map((cast) => {return cast})
    console.log(displayCharacters);

    return (
        <>
            <div class="cast-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="cast-title">
                                <h1>the cast</h1>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form action="" class="cast-search">
                                <select name="" id="" class="form-control" onChange={(e)=>setsearchCategory(e.target.value)}>
                                    <option value="character">Characters</option>
                                    <option value="location">Locations</option>
                                    <option value="episode">Episode</option>
                                </select>
                                <div class="form-group">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1390)">
                                        <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_2_1390">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>     
                                    <input type="text" class="form-control" placeholder="Search" value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>                           
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cast-list">
                <div class="container">
                    <div class="cast-list-inner">
                        {displayCharacters.map(castInfo => <Cast castInfo={castInfo} /> )}
                    </div>
                    <div className='pagination'>
                        <p>Page</p>
                        <div className='pagination-inner'>
                            {Number(id) > 1 ?<Link to={`/casts/page/${Number(id)-1}`} className='left-arrow'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18ZM10 9H14V11H10V14L6 10L10 6V9Z" fill="#888888"/>
                                </svg>
                            </Link>:""}
                            <div className='page-no' style={{background:`url(${bg})`}}>
                                {id}
                            </div>
                            {Number(id) < info?.pages ? <Link to={`/casts/page/${Number(id)+1}`} className='right-arrow'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z" fill="#14D9E6"/>
                                </svg>
                            </Link>: ""}
                        </div>
                        <p>of {info?.pages}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
