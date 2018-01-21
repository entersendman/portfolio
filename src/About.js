import React from "react"
import SimpleSlider from './Slider'
class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){


        return(

            <div className="container">

                <div className = "main">
                    <div className="banner">
                        <h1>Desire generates thinking</h1>
                    </div>
                    <div className="back-img">
                        <img className = "img-about"src = "https://image.ibb.co/kSeAGG/image.png"/>
                    </div>
                    <section className="wrapper">
                        <div className="blurb">
                            <p><strong>Greetings!</strong> My name is <strong>Yaroslav</strong>. I’m a senior student of Taras Shevchenko National University of Kyiv,
                                Radio Physics department. I am fond of networks and decided to
                                try something new, so I chose web programming.
                                Since the beginning of my training in the basics of the front-end development, a long time has already passed, so I hasten to share what I have learned.
                                This is my first portfolio and in general the application where I used the
                                React JS. I really liked the above mentioned framework, since it is easy for understanding
                                for a newcomer that I am. </p> </div>
                        <div className="skill-lookup">

                            <div className="skill-unit">
                                <div className="skill-label"><h3>Javascript: </h3></div>
                                <div className="skill-icons skill-6">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                                </div>
                            </div>
                            <div className="skill-unit">
                                <div className="skill-label"><h3>Innovating: </h3></div>
                                <div className="skill-icons skill-1">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                                </div>
                            </div>
                            <div className="skill-unit">
                                <div className="skill-label"><h3>HTML: </h3></div>
                                <div className="skill-icons skill-2">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                                </div>
                            </div>
                            <div className="skill-unit">
                                <div className="skill-label"><h3>Strong decision making: </h3></div>
                                <div className="skill-icons skill-3">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                                </div>
                            </div>
                            <div className="skill-unit">
                                <div className="skill-label"><h3>CSS: </h3></div>
                                <div className="skill-icons skill-4">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>

                                </div>
                            </div>
                            <div className="skill-unit">
                                <div className="skill-label"><h3>Excellent communicating: </h3></div>
                                <div className="skill-icons skill-5">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                                </div>
                        </div>
                       <h4> Here you can see some examples of my work:</h4>
                        <SimpleSlider/>
                    </section>
                </div>
            </div>
        )
    }
}
export default About;
