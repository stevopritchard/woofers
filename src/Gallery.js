import React from 'react';
import './Gallery.css';

const Gallery = () => {
    let imgArr = [];
    const path = require('path');
    const fs = require('fs');
    const directoryPath = path.join('src', 'images'); //not sure if I'm referencing the filepath correctly!
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach(function (file) {
            imgArr.push(file);
        });
    });
    return(
        <div className="container">
            <div id="contGallery">
                {
                    imgArr.map((user,i) => {
                        return(
                            <div>
                                <img alt="placeholder" src={i} style={{paddingLeft: 10}}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
};

export default Gallery;