import React, {Component} from 'react';

class Button extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          start: false,
          cards: [
            'Ace of Spades',
            'Ace of Hearts',
            'Ace of Clubs',
            'Ace of Diamonds',
            'One of Spades',
            'One of Hearts',
            'One of Clubs',
            'One of Diamonds',
            'Two of Spades',
            'Two of Hearts',
            'Two of Clubs',
            'Two of Diamonds',
            'Three of Spades',
            'Three of Hearts',
            'Three of Clubs',
            'Three of Diamonds',
            'Four of Spades',
            'Four of Hearts',
            'Four of Clubs',
            'Four of Diamonds',
            'Five of Spades',
            'Five of Hearts',
            'Five of Clubs',
            'Five of Diamonds',
            'Six of Spades',
            'Six of Hearts',
            'Six of Clubs',
            'Six of Diamonds',
            'Seven of Spades',
            'Seven of Hearts',
            'Seven of Clubs',
            'Seven of Diamonds',
            'Eight of Spades',
            'Eight of Hearts',
            'Eight of Clubs',
            'Eight of Diamonds',
            'Nine of Spades',
            'Nine of Hearts',
            'Nine of Clubs',
            'Nine of Diamonds',
            'Ten of Spades',
            'Ten of Hearts',
            'Ten of Clubs',
            'Ten of Diamonds',
            'Jack of Spades',
            'Jack of Hearts',
            'Jack of Clubs',
            'Jack of Diamonds',
            'Queen of Spades',
            'Queen of Hearts',
            'Queen of Clubs',
            'Queen of Diamonds',
            'King of Spades',
            'King of Hearts',
            'King of Clubs',
            'King of Diamonds',
        ],
          card: null
        }
    
        this.handleClick = 
        this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({
          start: true,
          card: this.state.cards[Math.floor(Math.random()*this.state.cards.length)]
        });
      }
      render() {
          return(
            <div className="App">
          <h1>Welcome to Solitaire</h1>
          <button onClick={this.handleClick}>Start</button>
        </div>
          )
      }
      
}

export default Button;