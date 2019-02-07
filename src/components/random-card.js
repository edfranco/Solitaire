import React, {Component} from 'react';


class RandomCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="randomCard">
`               <h1>{this.card}</h1>
            </div>
        )
    }
}

export default RandomCard;