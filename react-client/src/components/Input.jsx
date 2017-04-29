import React from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.ask = this.ask.bind(this);
  }

  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }

  ask () {
    this.props.askQuestion(this.state.input);
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div>
          <input 
            type="text"
            id="inputQuestion"  
            placeholder="say something here..." 
            value={this.state.input}
            onChange={this.handleChange}
          >
          </input>
          <Button 
            bsStyle="info" 
            onClick={this.ask} 
          >
          {`...and cleverbot will respond`}
          </Button>
      </div>
    )
  }
}

export default Input;