import React, { Component } from 'react';

class Card extends Component {

render() {
    let icon;
    return (
        <div className='col-md-3'>
            <img src={this.props.src} alt={this.props.caption} />
            <p>{this.props.caption}</p>
            <i className={(this.props.isLiked ? icon="fa fa-heart fa-5x" : icon="fa fa-heart-o fa-3x")} style={{color: 'red'}} aria-hidden="true"></i>
        </div>
        );
    }
}

export default Card;