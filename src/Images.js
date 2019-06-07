import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

class ImageGallery extends React.Component {
    constructor(props){
        super(props);  

        this.imgArr = [];

        const context = require.context('./images-gallery', true, /\.(JPG)$/);
        
        context.keys().forEach((filename)=>{
        this.imgArr.push ( context(filename) );
        });


        this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
        };
        
        this.isOpen = this.isOpen.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClose = this.onClose.bind(this);
        
    }
    isOpen (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
            lightboxIsOpen: true,
		});
        // console.log(this.imgArr)
    }
    
    onClose () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
    
    onClickPrev () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
    }
    
	onClickNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

    render(){
        return(
            <div style={{'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'space-evenly'}}>
            {
                this.imgArr.map((img,i) => {
                    return(
                        <div class="image-container">
                            <img key={i} class="myImage"  alt="placeholder" src={img} srcSet={img} onClick={(e) => this.isOpen(i, e)} style={{width: '200px', 'margin': '10px 0 10px 0'}}/>
                        </div>
                    )
                })
            }
            <Lightbox

        images={[{ src: 'https://picsum.photos/id/237/200/300' }, { src: 'https://picsum.photos/id/870/200/300?grayscale&blur=2' }]}
                // images={[{ src: this.props.imgArr }]}
                // currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={this.gotoPrevLightboxImage}
                onClickNext={this.gotoNextLightboxImage}
                onClose={this.closeLightbox}
            />
            </div>
        )
    }
}

ImageGallery.propTypes = {
	imgArr: PropTypes.array,
};

export default ImageGallery;