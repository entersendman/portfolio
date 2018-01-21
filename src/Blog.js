import React from 'react';
import {articles} from "./fixtures";
import ArticleList from './ArticleList'

class Blog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "wrapperBlog">
                <div className="titleBlog">
                     <h1>Welcome to my blog page!</h1>
                </div>
                <div className="postContainer" >
                    <ArticleList articles = {articles}>

                    </ArticleList>
                </div>
            </div>
        )
    }
}
export default Blog;