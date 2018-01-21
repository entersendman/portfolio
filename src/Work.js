import React from 'react';
var styles = {
    color: 'red'
}
class Work extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="container">
            <h1 style={styles}>Work</h1>
                </div>
        )
    }
}
export default Work;