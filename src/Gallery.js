import React from 'react';
import ImageGallery from './Images';
import './Gallery.css';


const Gallery = () => {



    return(
        <div className="container">
            <div className="preScrollable" id="contGallery">
            
                <ImageGallery/>

                {/* <div id="myModal" class="modal">
                    <span class="close" onClick={onclick2}>&times;</span>
                    <img class="modal-content" id="img01" src={image1} alt="placeholder"/>
                    <div id="caption"></div>
                </div> */}

                {/* <div id="myModal" className="modal">
                    <span class="close cursor" onclick="closeModal()">&times;</span>
                    <div className="modal-content">
                        { imgArr.map((img,i) => {
                            return(
                                <img src={img} onclick={`currentSlide(${i})`} alt="img"/>
                            )
                        })}
                    </div>
                </div> */}
            </div>

        </div>
    )
};

export default Gallery;
