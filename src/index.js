import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Footer from './footer'
import About from './About'
import Blog from './Blog'
import Work from './Work'

const history = createBrowserHistory();

ReactDOM.render(

        <div>
            <BrowserRouter history = {history}>
                <div>
                <div className="header">
                    <Link to = "/portfolio" >About</Link>
                    <Link to = "/portfolio/blog" >Blog</Link>
                </div>
                <div>
                    <Route exact path = "/portfolio" component = {About} />
                    <Route  path = "/portfolio/blog" component = {Blog} />
                </div>
                </div>
            </BrowserRouter>

        <Footer />
        </div> ,
                document.getElementById('root'));
registerServiceWorker();
