import React, { Component } from 'react';

class Card extends Component {

constructor() {
    super();
    this.state = {
        card: [
            {
                src: "https://via.placeholder.com/250x250",
                caption: "somethings and stuff",
                isLiked: true,
            },
            {
                src: "https://via.placeholder.com/250x250",
                caption: "some other things and stuff",
                isLiked: true,
            }
        ]
    }

}
render() {
    return (
        <div>
            Card
        </div>
        );
    }
}

export default Card;