import React, { Component } from 'react';
import ControlledCarousel from './ControlledCarousel';
import './MainArea.css'

class MainArea extends Component {
    render(){
        return(
            <div className="container">
                <div className="col-12">
                    <ControlledCarousel />
                </div>
            </div>
        )
    }
}
export default MainArea