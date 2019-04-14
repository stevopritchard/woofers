import React, { Component } from 'react';
import GoogleApiWrapper from './GoogleApiWrapper'

class Map extends Component {
    render() {
        return (
            <div style={{'paddingTop': '30px'}}>
                <GoogleApiWrapper/>
            </div>
        )
    }
}

export default Map