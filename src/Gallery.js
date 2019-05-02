import React from 'react';
import './Gallery.css';


const Gallery = () => {

    let imgArr = [];
    const context = require.context('./images', true, /\.(JPG)$/);
    context.keys().forEach((filename)=>{
        imgArr.push ( context(filename) );
    });

    return(
        <div className="container">
            <div id="contGallery">
                {
                    imgArr.map((img,i) => {
                        return(
                            <div>
                                <img alt="placeholder" src={img} style={{paddingLeft: 10}}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
};

export default Gallery;
