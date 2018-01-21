import React  from 'react'
import Slider from 'react-slick'

class SimpleSlider extends React.Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        return (
            <div className="sliderContainer">
            <Slider {...settings}>
                <div><a href="https://overstudio.herokuapp.com/"><img src="https://i.imgur.com/ZxBI94a.png" alt="Over/studio"/></a></div>
                <div><a href="https://codepen.io/entersendman/full/RLxKwj/"><img src="https://preview.ibb.co/dNVmOw/Landau.png" alt="Tribute page"/></a></div>
                <div><a href="https://codepen.io/entersendman/full/dVJzKE"><img src="https://preview.ibb.co/fYfQGG/Quotes.png" alt="Quotes"/></a></div>
                <div><a href="https://github.com/entersendman/ScreenCode"><img src="https://i.imgur.com/0xyvkdT.png" alt="ScreenCode"/></a></div>

            </Slider>
            </div>
        )
    }
}
export default SimpleSlider;