import React, { Component, } from 'react';

import Slider from "react-slick";

import MyCard from './Card.jsx'

// import { Container } from 'react-bootstrap'

// import './Gallery.js'





export default class MyCardSlider extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
          };
        return (
            <div>
                <div className="movieCardCarousel">
                    <Slider className="multiple-items" {...settings}>
                        <MyCard name="the good place"/>
                        <MyCard name="harry potter"/>
                        <MyCard name="die hard"/>
                        <MyCard name="luther"/>
                        <MyCard name="fast and furious"/>
                        <MyCard name="unhinged"/>
                        <MyCard name="the flight"/>
                        <MyCard name="karate kid"/>
                        <MyCard name="princess and the frog"/>
                        <MyCard name="lion king"/>
                        <MyCard name="love actually"/>
                        <MyCard name="frozen"/>
                    </Slider>
                </div>
                <div>
                    <Slider className="multiple-items" {...settings}>
                        <MyCard name="coco"/>
                        <MyCard name="the blacklist"/>
                        <MyCard name="how i met your mother"/>
                        <MyCard name="brooklyn nine"/>
                        <MyCard name="fresh prince"/>
                        <MyCard name="black mirror"/>
                        <MyCard name="when they see us"/>
                        <MyCard name="dead to me"/>
                        <MyCard name="black panther"/>
                        <MyCard name="how I met your mother"/>
                        <MyCard name="comedians of the world"/>
                        <MyCard name="beauty and the beast"/>
                    </Slider>
                </div>
                <div>
                    <Slider className="multiple-items" {...settings}>
                        <MyCard name="stranger things"/>
                        <MyCard name="david letterman"/>
                        <MyCard name="money heist"/>
                        <MyCard name="good girl"/>
                        <MyCard name="dave chappelle"/>
                        <MyCard name="the bird dave chappelle "/>
                        <MyCard name="the it crowd"/>
                        <MyCard name="tales of the city"/>
                        <MyCard name="the standups"/>
                        <MyCard name="kevin hart"/>
                        <MyCard name="the wood"/>
                        <MyCard name="candyman"/>
                    </Slider>
                </div>
            </div>

        )
    }
}

// export default MyCardSlider;

