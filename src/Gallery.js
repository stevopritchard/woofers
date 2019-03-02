import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    let v = [1,2,3,4,5,6,7,8]
        return(
            <div className="container" style={{backgroundColor: '#EFEFEF', height: 600}}>
                {
                    v.map((user,i) => {
                        return(
                            <img alt="placeholder" src="https://via.placeholder.com/200x240.png" style={{paddingLeft: 10}}/>
                        )
                    })
                }
            </div>
        )
}

export default Gallery;