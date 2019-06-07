import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class ImageModal extends React.Component {
    constructor(props, context) {
      super(props, context);
      
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
    

    
    render() {
      return (
          <Modal show={this.state.show} onHide={this.handleClose}>
            <img src="https://picsum.photos/200/300" onClick={this.handleShow}/>
          </Modal>
      );
    }
  }
  
//   render(<Example />);

  export default ImageModal;