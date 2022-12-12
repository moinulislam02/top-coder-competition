import React from 'react'
import Slider from 'react-slick'
import { Location } from './Location';
import { useState, useEffect } from 'react';
import {getLcoations} from '../api'

export function LocationSlider(props) {
    const [lcoations, setlcoations] = useState([])
    var settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:true,
        autoplay: true,
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

    const getLocation =()=>{
        getLcoations(1).then((res)=>{
            setlcoations(res.results)
        })
    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <div class="episod-slider">
            <div class="container">
                <h1 class="heading">
                    Locations
                </h1>
                <div class="episods owl-carousel owl-theme">
                    <Slider {...settings}>
                        {lcoations.map(locationDetails=>(
                            <Location locationDetails={locationDetails} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
