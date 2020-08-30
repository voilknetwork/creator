import React, { Component } from 'react';
import PropTypes from "prop-types";
class InfoItem extends Component {
    state = {  }
    
    render() { 
        return ( 
        <div class="col-md-4">
            <div class="milestone-counter c1">
                <img src={this.props.info.image} alt="" class="alignleft" />
                <h3 class="stat-count">{this.props.info.value}</h3>
                <p>{this.props.info.title}</p>
            </div>
        </div> 
    );
    }
}
InfoItem.propTypes = {
    info: PropTypes.object
}; 
export default InfoItem;