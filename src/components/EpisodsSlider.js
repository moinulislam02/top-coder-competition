import React from 'react'
import Slider from "react-slick";
import { Episod } from './Episod';
import { useState, useEffect } from 'react';
import {getEpisods} from '../api'

export function EpisodsSlider(props) {
    const [episods, setepisods] = useState([])
    var settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        arrows:true,
        responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        ]
    };

    const getEpisod =()=>{
        getEpisods(1).then((res)=>{
            setepisods(res.results)
        })
    }

    useEffect(() => {
        getEpisod()
    }, [])

    return (
        <div class="episod-slider">
            <div class="container">
                <h1 class="heading">
                    Episodes
                </h1>
                <div class="episods">
                    <Slider {...settings}>
                        {episods.map(episod=>(
                            <Episod episod={episod}/>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
