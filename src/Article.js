import React, { Component } from 'react'

class Article extends Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }

        this.toggleOpen = this.toggleOpen.bind(this)
    }

    render(){
        const {article} = this.props

        return(
            <div className="post">
                <h3  onClick = {this.toggleOpen} >{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }
    getBody (){
        if(!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
    }

    toggleOpen (){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
export default Article;