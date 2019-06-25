import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: "280px",
      height: "190px",
      marginLeft: "auto",
      marginRight: "auto",
      position: "relative",
      paddingTop: "40px",
      border: "2px solid #75a8a6"
    };
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={14}
        initialCenter={{ lat: 51.45002, lng: -2.476434 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Changing Colors Garage"}
          position={{ lat: 51.45002, lng: -2.476434 }}
          name={"Changing Colors Garage"}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBHELUEzGL4rf25kysG4fq3PdsGN8dvvT8"
})(GoogleMapsContainer);
