import React, { Component } from 'react';

class CarrierCard extends Component {

  render() {
    return <div className="card container card-container">
      <div className="grey lighten-4 card-content-carrierPrice">
        <div>
          <h5>${this.props.price} <span>per load</span></h5>
        </div>
        <div className="card-content-carrierCapabilities">
          <h6>Capabilities:</h6>
          {this.props.capabilities.map((capability, index) =>
            <h6 key={index}> {capability} </h6>
          )}
        </div>
      </div>
      <div className="card-content-contactInfo">
        <h6>{this.props.contactName}<span>|</span></h6>
        <h6>{this.props.contactEmail}<span>|</span></h6>
        <h6>{this.props.contactPhone}</h6>
      </div>
    </div>
  }

}

export default CarrierCard;
