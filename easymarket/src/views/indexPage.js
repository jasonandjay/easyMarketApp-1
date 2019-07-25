import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '../router/index'
import Footer from '../components/footer'

import "./index.scss"

class IndexPage extends Component {
    render() {
        return (
            <div className='wrap'>
                <Router>
                    <div className='section'>
                        <RouterView/>
                    </div>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default IndexPage