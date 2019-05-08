import React from 'react';

class ImageGallery extends React.Component {
    constructor(props){
        super(props);  

        this.imgArr = [];

        const context = require.context('./images-gallery', true, /\.(JPG)$/);
        
        context.keys().forEach((filename)=>{
        this.imgArr.push ( context(filename) );
        });
    }
    
    

    render(){
        return(
            <div>
            {
                this.imgArr.map((img,i) => {
                    return(
                        <div class="image-container">
                            <img key={i} class="myImage"  alt="placeholder" src={img} style={{width: '200px'}}/>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default ImageGallery;