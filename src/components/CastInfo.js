import React from 'react'
import imageBgMd from '../img/image-bg-md.png'
import imageBgLg from '../img/image-bg-lg.png'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {getCast} from '../api'
import axios from 'axios'

export function CastInfo(props) {
    const [CastInfo, setCastInfo] = useState({})
    const {id} = useParams()
    const [episodeNames, setepisodeNames] = useState([])
    const getCastInfo = () =>{
        getCast(id).then((res)=>{
            setCastInfo(res)
        })
    }

    useEffect(() => {
        getCastInfo()
    }, [id])

    // const searchEpisode = async (url) =>{
    //     try {
    //         const res = await axios.get(url);
    //         return res.data.name
    //     } catch (error) {
            
    //     }
    // }

    // const episodeName = ()=>{  
    //     CastInfo?.episode?.map((epi) => {
    //         searchEpisode(epi).then((res)=>{
    //             const updateEpisode = [...episodeNames, res]
    //             setepisodeNames(updateEpisode)
    //         })
    //     })
    // }
    

    return (
        <div class="cast-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex align-items-center justify-content-around">
                        <div class="cast-image-info">
                            <h1 className='text-center'>{CastInfo?.name}</h1>
                            <div class="cast-img">
                                <img src={CastInfo?.image} alt=""/>
                            </div>
                        </div>
                        <div class="devider"></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="cast-details">
                            <div class="cast-info-widgets-mid">
                                <div class="cast-info-widget md" style={{background: `url(${imageBgMd})`,backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1602)">
                                        <path d="M40.486 9.51398C45.01 14.05 45.166 21.274 40.958 25.986L23.998 42.97L7.04201 25.986C2.83401 21.274 2.99201 14.038 7.51401 9.51398C11.03 5.99998 16.186 5.11998 20.522 6.87998L12.686 14.716L15.514 17.546L24 9.05998L23.974 9.03198L24.002 9.05798C28.7 4.83998 35.96 4.97998 40.486 9.51398Z" fill="url(#paint0_linear_2_1602)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_2_1602" x1="0.235225" y1="-1.33055" x2="49.0659" y2="7.47382" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9DFE00"/>
                                        <stop offset="1" stop-color="#14D9E6"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_1602">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    <p>Status</p>  
                                    <h1>{CastInfo?.status}</h1>                                      
                                </div>
                                <div class="cast-info-widget md" style={{background: `url(${imageBgMd})`,backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1595)">
                                        <path d="M12.764 7.93602C15.9515 5.38215 19.9156 3.99351 24 4.00002C28.25 4.00002 32.156 5.47202 35.236 7.93602L38.142 5.03002L40.97 7.85802L38.064 10.764C40.6179 13.9515 42.0065 17.9156 42 22V24H6V22C6 17.75 7.472 13.844 9.936 10.764L7.03 7.86002L9.858 5.03202L12.764 7.93802V7.93602ZM6 28H42V42C42 42.5305 41.7893 43.0392 41.4142 43.4142C41.0391 43.7893 40.5304 44 40 44H8C7.46957 44 6.96086 43.7893 6.58579 43.4142C6.21071 43.0392 6 42.5305 6 42V28ZM18 18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0392 20 16.5305 20 16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16C16 16.5305 16.2107 17.0392 16.5858 17.4142C16.9609 17.7893 17.4696 18 18 18ZM30 18C30.5304 18 31.0391 17.7893 31.4142 17.4142C31.7893 17.0392 32 16.5305 32 16C32 15.4696 31.7893 14.9609 31.4142 14.5858C31.0391 14.2107 30.5304 14 30 14C29.4696 14 28.9609 14.2107 28.5858 14.5858C28.2107 14.9609 28 15.4696 28 16C28 16.5305 28.2107 17.0392 28.5858 17.4142C28.9609 17.7893 29.4696 18 30 18Z" fill="url(#paint0_linear_2_1595)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_2_1595" x1="2.61176" y1="-3.93105" x2="46.9891" y2="2.72464" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9DFE00"/>
                                        <stop offset="1" stop-color="#14D9E6"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_1595">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>                                        
                                    <p>Species</p>  
                                    <h1>{CastInfo?.species}</h1>                                      
                                </div>
                                <div class="cast-info-widget md" style={{background: `url(${imageBgMd})`,backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1589)">
                                        <path d="M37.172 10H28V6H44V22H40V12.828L32.926 19.902C35.2337 22.927 36.3056 26.716 35.9247 30.5017C35.5438 34.2873 33.7385 37.7868 30.8744 40.2914C28.0103 42.7961 24.3014 44.1187 20.4987 43.9915C16.6961 43.8644 13.0839 42.2969 10.3935 39.6065C7.70308 36.9161 6.13561 33.3039 6.00845 29.5013C5.88129 25.6986 7.20394 21.9897 9.70858 19.1256C12.2132 16.2615 15.7127 14.4562 19.4983 14.0753C23.284 13.6944 27.073 14.7663 30.098 17.074L37.172 10Z" fill="url(#paint0_linear_2_1589)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_2_1589" x1="2.4236" y1="-1.53448" x2="49.0257" y2="6.23148" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9DFE00"/>
                                        <stop offset="1" stop-color="#14D9E6"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_1589">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>                                        
                                    <p>Gender</p>  
                                    <h1>{CastInfo?.gender}</h1>                                      
                                </div>
                            </div>
                            <div class="cast-widgets-lg">
                                <div class="cast-info-widget lg" style={{background: `url(${imageBgLg})`,backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1583)">
                                        <path d="M24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44ZM36.71 31.904V31.694C36.71 29.85 36.71 29.008 35.406 28.262C34.9869 28.0244 34.5564 27.8075 34.116 27.612C33.382 27.278 32.896 27.06 32.24 26.1C32.1617 25.986 32.0843 25.8713 32.008 25.756C31.318 24.706 30.82 23.95 28.924 24.25C25.194 24.842 24.918 25.498 24.754 26.606L24.728 26.788C24.486 28.408 24.442 28.952 25.118 29.662C27.648 32.316 29.164 34.23 29.624 35.35C29.848 35.896 30.424 37.55 30.028 39.186C32.4556 38.219 34.6165 36.685 36.33 34.712C36.55 33.964 36.71 33.032 36.71 31.904ZM24 7.666C19.366 7.666 15.18 9.598 12.208 12.698C12.562 12.944 12.87 13.29 13.082 13.766C13.49 14.68 13.49 15.622 13.49 16.456C13.49 17.112 13.49 17.736 13.7 18.186C13.988 18.802 15.232 19.066 16.33 19.294C16.724 19.378 17.128 19.462 17.496 19.564C18.508 19.844 19.292 20.754 19.918 21.484C20.178 21.786 20.564 22.232 20.758 22.344C20.858 22.272 21.18 21.922 21.338 21.348C21.462 20.908 21.426 20.52 21.248 20.308C20.128 18.988 20.19 16.448 20.536 15.51C21.08 14.032 22.78 14.142 24.024 14.222C24.488 14.252 24.924 14.282 25.252 14.24C26.496 14.084 26.88 12.19 27.15 11.82C27.734 11.02 29.522 9.814 30.63 9.07C28.543 8.14199 26.284 7.66362 24 7.666Z" fill="url(#paint0_linear_2_1583)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_2_1583" x1="0.235296" y1="-3.93104" x2="49.2902" y2="4.24367" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9DFE00"/>
                                        <stop offset="1" stop-color="#14D9E6"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_1583">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>   
                                    <p>Origin</p> 
                                    <h1>{CastInfo?.origin?.name}</h1>                                    
                                </div>
                                <div class="cast-info-widget lg" style={{background: `url(${imageBgLg})`,backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1574)">
                                        <path d="M22 35.876C17.9654 35.3626 14.2777 33.3323 11.6864 30.1976C9.09505 27.0629 7.79456 23.0591 8.04924 18.9999C8.30392 14.9408 10.0947 11.131 13.0575 8.34476C16.0203 5.55855 19.9329 4.00505 24 4C28.0721 3.99697 31.9921 5.54668 34.9613 8.33336C37.9305 11.12 39.7255 14.934 39.9805 18.9981C40.2355 23.0622 38.9313 27.0706 36.3337 30.2065C33.7361 33.3425 30.0405 35.37 26 35.876V40.024C33.892 40.208 40 41.47 40 43C40 44.656 32.836 46 24 46C15.164 46 8 44.656 8 43C8 41.47 14.108 40.208 22 40.024V35.876ZM24 24C25.0609 24 26.0783 23.5786 26.8284 22.8284C27.5786 22.0783 28 21.0609 28 20C28 18.9391 27.5786 17.9217 26.8284 17.1716C26.0783 16.4214 25.0609 16 24 16C22.9391 16 21.9217 16.4214 21.1716 17.1716C20.4214 17.9217 20 18.9391 20 20C20 21.0609 20.4214 22.0783 21.1716 22.8284C21.9217 23.5786 22.9391 24 24 24Z" fill="url(#paint0_linear_2_1574)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_2_1574" x1="4.98711" y1="-4.3276" x2="44.6953" y2="0.715912" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9DFE00"/>
                                        <stop offset="1" stop-color="#14D9E6"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_1574">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>                                        
                                    <p>Last Known Location</p> 
                                    <h1>{CastInfo?.location?.name}</h1>                                    
                                </div>
                                <div class="cast-info-widget lg" style={{background: `url(${imageBgLg})`,backgroundRepeat: "no-repeat",backgroundSize: "contain"}}>
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_2_1564)">
                                        <path d="M44 36V40H4V36H44ZM4 7L20 17L4 27V7ZM44 22V26H24V22H44ZM44 8V12H24V8H44Z" fill="url(#paint0_linear_2_1564)"/>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_2_1564" x1="0.235296" y1="0.45689" x2="48.6761" y2="10.2416" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#9DFE00"/>
                                        <stop offset="1" stop-color="#14D9E6"/>
                                        </linearGradient>
                                        <clipPath id="clip0_2_1564">
                                        <rect width="48" height="48" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>                                                                              
                                    <p>Episodes</p> 
                                    <ul>
                                        {/* {CastInfo?.episode?.map(epi=>(
                                            <li>{epi}</li>
                                        ))} */}
                                    </ul>                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
