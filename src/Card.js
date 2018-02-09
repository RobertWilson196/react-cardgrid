import React, { Component } from 'react';

class Card extends Component {

render() {
    const classes = this.props.isLiked ? "fa fa-heart fa-3x" : "fa fa-heart-o fa-3x";
    return (
        <div className='col-md-3'>
            <img src={this.props.src} alt={this.props.caption} />
            <p>{this.props.caption}</p>
            <i className={classes} style={{color: 'red'}} aria-hidden="true"></i>
        </div>
        );
    }
}

export default Card;