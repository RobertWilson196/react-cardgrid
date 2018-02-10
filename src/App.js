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
              isLiked: false,
          },
          {
              src: "https://via.placeholder.com/250x250",
              caption: "somethings and stuff",
              isLiked: true,
          },
          {
              src: "https://via.placeholder.com/250x250",
              caption: "some other things and stuff",
              isLiked: true,
          },
            {
              src: "https://via.placeholder.com/250x250",
              caption: "somethings and stuff",
              isLiked: false,
          },
          {
              src: "https://via.placeholder.com/250x250",
              caption: "some other things and stuff",
              isLiked: true,
          },
          {
              src: "https://via.placeholder.com/250x250",
              caption: "somethings and stuff",
              isLiked: false,
          },
          {
              src: "https://via.placeholder.com/250x250",
              caption: "some other things and stuff",
              isLiked: true,
          }
          
        ]
        }
        this.handleLike = this.handleLike.bind(this);
    }
    
  
  handleLike(position) {
    const clickedCard = this.state.card[position];
    const first = this.state.card.slice(0, position);
    const last = this.state.card.slice(position + 1)
    const newCards = [
        ...first,
        {...clickedCard, isLiked: !clickedCard.isLiked}, 
        ...last,
    ];
    this.setState({card: newCards});

  }
  render() {
    const { card } = this.state;
    const CardGrid = card.map((card, index) => <Card key={index} src={card.src} caption={card.caption}
    isLiked={card.isLiked}  onLike={() => this.handleLike(index) } />);
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
