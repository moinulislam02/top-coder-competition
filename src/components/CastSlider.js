import React from 'react'
import Slider from "react-slick";
import { getCharacter } from '../api';
import { Cast } from './Cast';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CastSlider() {
    const [characteres, setcharacteres] = useState([])
    var settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:true,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
          },
          {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
          },
          {
            breakpoint: 1078,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    const getCharacters =()=>{
        getCharacter(1).then((res)=>{
            setcharacteres(res.results)
        })
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div class="cast-slider">
            <div class="container">
                <h1 class="heading">
                    Meet The Cast
                    <Link to="/casts/page/2" class="see-more">View All</Link>
                </h1>
                <div class="characters">
                    <Slider {...settings}>
                        {characteres.map(cast=>(
                            <Cast castInfo={cast} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
