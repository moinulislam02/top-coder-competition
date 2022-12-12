import React from 'react'
import { Banner } from './Banner'
import { CastSlider } from './CastSlider'
import { EpisodsSlider } from './EpisodsSlider'
import { LocationSlider } from './LocationSlider'

export function Home(props) {
    

    return (
        <>
            <Banner />
            <CastSlider/>
            <EpisodsSlider/>
            <LocationSlider />
        </>
    )
}
