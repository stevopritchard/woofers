import React from 'react';
import { Modal } from 'react-bootstrap';
import image1 from "./images-carousel/IMG-0463.jpg"
import './Gallery.css';


const Gallery = () => {

    let imgArr = [];
    const context = require.context('./images-gallery', true, /\.(JPG)$/);
    context.keys().forEach((filename)=>{
        imgArr.push ( context(filename) );
    });

//     let modal = document.getElementById('myModal');
//     // let modalImg = document.querySelectorAll("myImage");

//    function openModal() {
//         document.getElementById('myModal').style.display = "block";
//     }



// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
const onclick1 = (props) => {
    var modal = document.getElementById('myModal');
  modal.style.display = "block";
//   alert("clicked")
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
const onclick2 = (props) => { 
    var modal = document.getElementById('myModal');
  modal.style.display = "none";
}

    return(
        <div className="container">
            <div className="preScrollable" id="contGallery">
            <img id="myImg" src={image1} style={{'width': '200px'}} onClick={onclick1} alt="placeholder"/>
                {
                    imgArr.map((img,i) => {
                        return(
                            <div class="image-container">
                                {/* <img class="myImage"  alt="placeholder" src={img} onclick={openModal} style={{width: '200px'}}/> */}
                                {/* <div class="overlay">
                                    <a href="#" class="icon" title="User Profile">
                                        <i class="fa fa-camera"></i> 
                                    </a>
                                </div> */}
                            </div>
                        )
                    })
                }

                <div id="myModal" class="modal">
                    <span class="close" onClick={onclick2}>&times;</span>
                    <img class="modal-content" id="img01" src={image1} alt="placeholder"/>
                    <div id="caption"></div>
                </div>

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
