import React, { Component } from 'react';

class CarrierCard extends Component {

  render() {
    return <div className="card container card-container">
      <div className="card-content grey lighten-4 card-content-carrierName">
        <h5>{this.props.carrierName}</h5>
      </div>
      <div className="card-content-carrierPrice">
        <h5>${this.props.price} <span>per load</span></h5>
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
