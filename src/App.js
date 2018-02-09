import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
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
    const { card } = this.state;
    const CardGrid = card.map((card, index) => <Card key={index} src={card.src} caption={card.caption}
    isLiked={card.isLiked} />);
    return (    
      <div className="container">
        Card Grid
        <div className='row'>
        { CardGrid }
        </div>
      </div>
    );
  }
}

export default App;
