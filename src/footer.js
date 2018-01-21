import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)
    }


    render(){


        return(
            <div className="footer">
                <ul className = "glyphicons">
                    <a href="https://www.instagram.com/yaroslav.yuzvenko/" target="_blank"><li className="fa fa-instagram" style={{fontSize:'36px'}}></li></a>
                    <a href="https://www.facebook.com/drummerdolbit" target="_blank"><li className = "fa fa-facebook-square" style={{fontSize: '36px'}}></li></a>
                    <a href="https://github.com/entersendman" target="_blank"><li className="fa fa-github-alt" style={{fontSize: '36px'}}></li></a>
                </ul>
                Kyiv,  2018 (c)Yaroslav Yuzvenko
            </div>
        )
    }
}

export default Footer;